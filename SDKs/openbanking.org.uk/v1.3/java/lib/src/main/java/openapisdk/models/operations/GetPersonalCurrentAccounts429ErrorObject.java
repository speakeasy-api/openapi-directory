package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPersonalCurrentAccounts429ErrorObject {
    @JsonProperty("description")
    public GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum description;
    public GetPersonalCurrentAccounts429ErrorObject withDescription(GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetPersonalCurrentAccounts429ErrorObjectStatusEnum status;
    public GetPersonalCurrentAccounts429ErrorObject withStatus(GetPersonalCurrentAccounts429ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetPersonalCurrentAccounts429ErrorObjectTitleEnum title;
    public GetPersonalCurrentAccounts429ErrorObject withTitle(GetPersonalCurrentAccounts429ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}