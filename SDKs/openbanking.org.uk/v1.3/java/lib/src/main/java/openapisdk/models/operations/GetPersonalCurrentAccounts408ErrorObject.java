package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPersonalCurrentAccounts408ErrorObject {
    @JsonProperty("description")
    public GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum description;
    public GetPersonalCurrentAccounts408ErrorObject withDescription(GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetPersonalCurrentAccounts408ErrorObjectStatusEnum status;
    public GetPersonalCurrentAccounts408ErrorObject withStatus(GetPersonalCurrentAccounts408ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetPersonalCurrentAccounts408ErrorObjectTitleEnum title;
    public GetPersonalCurrentAccounts408ErrorObject withTitle(GetPersonalCurrentAccounts408ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}