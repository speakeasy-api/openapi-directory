package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePagePropertiesRequestBodyProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public UpdatePagePropertiesRequestBodyPropertiesStatus status;
    public UpdatePagePropertiesRequestBodyProperties withStatus(UpdatePagePropertiesRequestBodyPropertiesStatus status) {
        this.status = status;
        return this;
    }
}