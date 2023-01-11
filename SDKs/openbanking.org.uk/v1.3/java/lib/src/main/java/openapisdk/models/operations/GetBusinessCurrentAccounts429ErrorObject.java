package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBusinessCurrentAccounts429ErrorObject {
    @JsonProperty("description")
    public GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum description;
    public GetBusinessCurrentAccounts429ErrorObject withDescription(GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public GetBusinessCurrentAccounts429ErrorObjectStatusEnum status;
    public GetBusinessCurrentAccounts429ErrorObject withStatus(GetBusinessCurrentAccounts429ErrorObjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public GetBusinessCurrentAccounts429ErrorObjectTitleEnum title;
    public GetBusinessCurrentAccounts429ErrorObject withTitle(GetBusinessCurrentAccounts429ErrorObjectTitleEnum title) {
        this.title = title;
        return this;
    }
}