package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TraceSink
 * Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project.
**/
public class TraceSink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TraceSink withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public OutputConfig outputConfig;
    public TraceSink withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("writerIdentity")
    public String writerIdentity;
    public TraceSink withWriterIdentity(String writerIdentity) {
        this.writerIdentity = writerIdentity;
        return this;
    }
}