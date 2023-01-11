package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpsertAccountRequestBodyMembers
 * Identification requires an accountId, domain or both
**/
public class UpsertAccountRequestBodyMembers {
    @JsonProperty("identification")
    public UpsertAccountRequestBodyMembersIdentification identification;
    public UpsertAccountRequestBodyMembers withIdentification(UpsertAccountRequestBodyMembersIdentification identification) {
        this.identification = identification;
        return this;
    }
}