package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsertUserRequestBody
 * Update properties of a user
**/
public class UpsertUserRequestBody {
    @JsonProperty("identification")
    public UpsertUserRequestBodyIdentification identification;
    public UpsertUserRequestBody withIdentification(UpsertUserRequestBodyIdentification identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, Object> properties;
    public UpsertUserRequestBody withProperties(java.util.Map<String, Object> properties) {
        this.properties = properties;
        return this;
    }
}