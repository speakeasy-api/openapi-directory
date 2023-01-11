package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClientDisconnectedProblem
 * Your client has gone away.
**/
public class ClientDisconnectedProblem {
    @JsonProperty("detail")
    public String detail;
    public ClientDisconnectedProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ClientDisconnectedProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ClientDisconnectedProblem withType(String type) {
        this.type = type;
        return this;
    }
}