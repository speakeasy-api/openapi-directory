package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstallationPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checks")
    public String checks;
    public InstallationPermissions withChecks(String checks) {
        this.checks = checks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public InstallationPermissions withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public String deployments;
    public InstallationPermissions withDeployments(String deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public String issues;
    public InstallationPermissions withIssues(String issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public String metadata;
    public InstallationPermissions withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_administration")
    public String organizationAdministration;
    public InstallationPermissions withOrganizationAdministration(String organizationAdministration) {
        this.organizationAdministration = organizationAdministration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pull_requests")
    public String pullRequests;
    public InstallationPermissions withPullRequests(String pullRequests) {
        this.pullRequests = pullRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses")
    public String statuses;
    public InstallationPermissions withStatuses(String statuses) {
        this.statuses = statuses;
        return this;
    }
}