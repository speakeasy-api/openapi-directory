package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportInstanceRequest
 * Request for Export.
**/
public class ExportInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public OutputConfig outputConfig;
    public ExportInstanceRequest withOutputConfig(OutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
}