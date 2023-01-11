package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GerritSourceContext
 * A SourceContext referring to a Gerrit project.
**/
public class GerritSourceContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliasContext")
    public AliasContext aliasContext;
    public GerritSourceContext withAliasContext(AliasContext aliasContext) {
        this.aliasContext = aliasContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gerritProject")
    public String gerritProject;
    public GerritSourceContext withGerritProject(String gerritProject) {
        this.gerritProject = gerritProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostUri")
    public String hostUri;
    public GerritSourceContext withHostUri(String hostUri) {
        this.hostUri = hostUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public GerritSourceContext withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}