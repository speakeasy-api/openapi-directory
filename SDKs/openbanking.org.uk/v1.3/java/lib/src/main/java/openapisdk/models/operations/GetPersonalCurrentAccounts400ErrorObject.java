package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPersonalCurrentAccounts400ErrorObject {
    @JsonProperty("description")
    public GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum description;
    public GetPersonalCurrentAccounts400ErrorObject withDescription(GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetPersonalCurrentAccounts400ErrorObjectStatusEnum status;
    public GetPersonalCurrentAccounts400ErrorObject withStatus(GetPersonalCurrentAccounts400ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetPersonalCurrentAccounts400ErrorObjectTitleEnum title;
    public GetPersonalCurrentAccounts400ErrorObject withTitle(GetPersonalCurrentAccounts400ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}