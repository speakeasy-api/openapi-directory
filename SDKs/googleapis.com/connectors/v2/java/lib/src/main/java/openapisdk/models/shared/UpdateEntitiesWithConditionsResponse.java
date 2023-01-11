package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEntitiesWithConditionsResponse
 * Response message for EntityService.UpdateEntitiesWithConditions
**/
public class UpdateEntitiesWithConditionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public java.util.Map<String, Object> response;
    public UpdateEntitiesWithConditionsResponse withResponse(java.util.Map<String, Object> response) {
        this.response = response;
        return this;
    }
}