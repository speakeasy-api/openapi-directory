package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsertAccountRequestBody
 * Update properties and/or members of an account
**/
public class UpsertAccountRequestBody {
    @JsonProperty("identification")
    public UpsertAccountRequestBodyIdentification identification;
    public UpsertAccountRequestBody withIdentification(UpsertAccountRequestBodyIdentification identification) {
        this.identification = identification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public UpsertAccountRequestBodyMembers[] members;
    public UpsertAccountRequestBody withMembers(UpsertAccountRequestBodyMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, Object> properties;
    public UpsertAccountRequestBody withProperties(java.util.Map<String, Object> properties) {
        this.properties = properties;
        return this;
    }
}