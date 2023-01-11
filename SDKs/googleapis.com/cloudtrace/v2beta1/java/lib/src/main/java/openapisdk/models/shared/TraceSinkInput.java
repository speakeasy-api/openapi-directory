package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TraceSinkInput
 * Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
**/
public class TraceSinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TraceSinkInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public OutputConfig outputConfig;
    public TraceSinkInput withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
}