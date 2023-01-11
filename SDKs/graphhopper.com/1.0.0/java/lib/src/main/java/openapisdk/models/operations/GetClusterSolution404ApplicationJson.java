package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClusterSolution404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GetClusterSolution404ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetClusterSolution404ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}