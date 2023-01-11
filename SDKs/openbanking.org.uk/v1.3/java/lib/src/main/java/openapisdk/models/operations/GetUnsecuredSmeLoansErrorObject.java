package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUnsecuredSmeLoansErrorObject {
    @JsonProperty("description")
    public String description;
    public GetUnsecuredSmeLoansErrorObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetUnsecuredSmeLoansErrorObject withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GetUnsecuredSmeLoansErrorObject withTitle(String title) {
        this.title = title;
        return this;
    }
}