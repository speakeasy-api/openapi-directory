package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBusinessCurrentAccounts500ErrorObject {
    @JsonProperty("description")
    public GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum description;
    public GetBusinessCurrentAccounts500ErrorObject withDescription(GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetBusinessCurrentAccounts500ErrorObjectStatusEnum status;
    public GetBusinessCurrentAccounts500ErrorObject withStatus(GetBusinessCurrentAccounts500ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetBusinessCurrentAccounts500ErrorObjectTitleEnum title;
    public GetBusinessCurrentAccounts500ErrorObject withTitle(GetBusinessCurrentAccounts500ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}