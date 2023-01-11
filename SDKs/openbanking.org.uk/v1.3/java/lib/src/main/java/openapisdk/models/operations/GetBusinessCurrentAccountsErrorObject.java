package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBusinessCurrentAccountsErrorObject {
    @JsonProperty("description")
    public String description;
    public GetBusinessCurrentAccountsErrorObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetBusinessCurrentAccountsErrorObject withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GetBusinessCurrentAccountsErrorObject withTitle(String title) {
        this.title = title;
        return this;
    }
}