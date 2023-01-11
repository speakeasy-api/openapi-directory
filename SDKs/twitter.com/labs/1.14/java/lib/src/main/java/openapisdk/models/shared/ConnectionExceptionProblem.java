package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionExceptionProblem
 * A problem that indicates something is wrong with the connection
**/
public class ConnectionExceptionProblem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_issue")
    public ConnectionExceptionProblemConnectionIssueEnum connectionIssue;
    public ConnectionExceptionProblem withConnectionIssue(ConnectionExceptionProblemConnectionIssueEnum connectionIssue) {
        this.connectionIssue = connectionIssue;
        return this;
    }
    @JsonProperty("detail")
    public String detail;
    public ConnectionExceptionProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ConnectionExceptionProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ConnectionExceptionProblem withType(String type) {
        this.type = type;
        return this;
    }
}