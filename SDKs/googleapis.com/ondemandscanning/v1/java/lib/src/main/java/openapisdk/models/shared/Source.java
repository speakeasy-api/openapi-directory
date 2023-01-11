package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * Source describes the location of the source used for the build.
**/
public class Source {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalContexts")
    public SourceContext[] additionalContexts;
    public Source withAdditionalContexts(SourceContext[] additionalContexts) {
        this.additionalContexts = additionalContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactStorageSourceUri")
    public String artifactStorageSourceUri;
    public Source withArtifactStorageSourceUri(String artifactStorageSourceUri) {
        this.artifactStorageSourceUri = artifactStorageSourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public SourceContext context;
    public Source withContext(SourceContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileHashes")
    public java.util.Map<String, FileHashes> fileHashes;
    public Source withFileHashes(java.util.Map<String, FileHashes> fileHashes) {
        this.fileHashes = fileHashes;
        return this;
    }
}