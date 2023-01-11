package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPersonalCurrentAccountsErrorObject {
    @JsonProperty("description")
    public String description;
    public GetPersonalCurrentAccountsErrorObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetPersonalCurrentAccountsErrorObject withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GetPersonalCurrentAccountsErrorObject withTitle(String title) {
        this.title = title;
        return this;
    }
}