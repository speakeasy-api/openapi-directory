package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IntegrationFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heroku")
    public Boolean heroku;
    public IntegrationFields withHeroku(Boolean heroku) {
        this.heroku = heroku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jira_cloud")
    public Boolean jiraCloud;
    public IntegrationFields withJiraCloud(Boolean jiraCloud) {
        this.jiraCloud = jiraCloud;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jira_server")
    public Boolean jiraServer;
    public IntegrationFields withJiraServer(Boolean jiraServer) {
        this.jiraServer = jiraServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slack")
    public Boolean slack;
    public IntegrationFields withSlack(Boolean slack) {
        this.slack = slack;
        return this;
    }
}