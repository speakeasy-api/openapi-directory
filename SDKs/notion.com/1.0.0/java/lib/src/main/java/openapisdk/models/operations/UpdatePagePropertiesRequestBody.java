package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePagePropertiesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public UpdatePagePropertiesRequestBodyProperties properties;
    public UpdatePagePropertiesRequestBody withProperties(UpdatePagePropertiesRequestBodyProperties properties) {
        this.properties = properties;
        return this;
    }
}