package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPersonalCurrentAccounts503ErrorObject {
    @JsonProperty("description")
    public GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum description;
    public GetPersonalCurrentAccounts503ErrorObject withDescription(GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetPersonalCurrentAccounts503ErrorObjectStatusEnum status;
    public GetPersonalCurrentAccounts503ErrorObject withStatus(GetPersonalCurrentAccounts503ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetPersonalCurrentAccounts503ErrorObjectTitleEnum title;
    public GetPersonalCurrentAccounts503ErrorObject withTitle(GetPersonalCurrentAccounts503ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}