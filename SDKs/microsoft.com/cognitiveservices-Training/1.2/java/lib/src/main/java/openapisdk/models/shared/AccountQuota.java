package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountQuota
 * Represents a set of quotas associated with an account
**/
public class AccountQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerProject")
    public PerProjectQuota[] perProject;
    public AccountQuota withPerProject(PerProjectQuota[] perProject) {
        this.perProject = perProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Predictions")
    public Quota predictions;
    public AccountQuota withPredictions(Quota predictions) {
        this.predictions = predictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Projects")
    public Quota projects;
    public AccountQuota withProjects(Quota projects) {
        this.projects = projects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tier")
    public String tier;
    public AccountQuota withTier(String tier) {
        this.tier = tier;
        return this;
    }
}