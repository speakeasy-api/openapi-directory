package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBusinessCurrentAccounts503ErrorObject {
    @JsonProperty("description")
    public GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum description;
    public GetBusinessCurrentAccounts503ErrorObject withDescription(GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetBusinessCurrentAccounts503ErrorObjectStatusEnum status;
    public GetBusinessCurrentAccounts503ErrorObject withStatus(GetBusinessCurrentAccounts503ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetBusinessCurrentAccounts503ErrorObjectTitleEnum title;
    public GetBusinessCurrentAccounts503ErrorObject withTitle(GetBusinessCurrentAccounts503ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}