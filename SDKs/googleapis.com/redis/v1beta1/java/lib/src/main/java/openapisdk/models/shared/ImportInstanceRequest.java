package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportInstanceRequest
 * Request for Import.
**/
public class ImportInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public InputConfig inputConfig;
    public ImportInstanceRequest withInputConfig(InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
}