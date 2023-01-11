package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPersonalCurrentAccounts500ErrorObject {
    @JsonProperty("description")
    public GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum description;
    public GetPersonalCurrentAccounts500ErrorObject withDescription(GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetPersonalCurrentAccounts500ErrorObjectStatusEnum status;
    public GetPersonalCurrentAccounts500ErrorObject withStatus(GetPersonalCurrentAccounts500ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetPersonalCurrentAccounts500ErrorObjectTitleEnum title;
    public GetPersonalCurrentAccounts500ErrorObject withTitle(GetPersonalCurrentAccounts500ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}