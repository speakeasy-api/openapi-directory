package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JiraIssuePriority
 * Jira issue priority.
**/
public class JiraIssuePriority {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public JiraIssuePriority withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public JiraIssuePriority withName(String name) {
        this.name = name;
        return this;
    }
}