package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRepoSourceContext
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
public class CloudRepoSourceContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliasContext")
    public AliasContext aliasContext;
    public CloudRepoSourceContext withAliasContext(AliasContext aliasContext) {
        this.aliasContext = aliasContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repoId")
    public RepoId repoId;
    public CloudRepoSourceContext withRepoId(RepoId repoId) {
        this.repoId = repoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public CloudRepoSourceContext withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}