package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceContext
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
**/
public class SourceContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudRepo")
    public CloudRepoSourceContext cloudRepo;
    public SourceContext withCloudRepo(CloudRepoSourceContext cloudRepo) {
        this.cloudRepo = cloudRepo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gerrit")
    public GerritSourceContext gerrit;
    public SourceContext withGerrit(GerritSourceContext gerrit) {
        this.gerrit = gerrit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public GitSourceContext git;
    public SourceContext withGit(GitSourceContext git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public SourceContext withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}