package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CodeScanningUploadSarifRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkout_uri")
    public String checkoutUri;
    public CodeScanningUploadSarifRequestBody withCheckoutUri(String checkoutUri) {
        this.checkoutUri = checkoutUri;
        return this;
    }
    @JsonProperty("commit_sha")
    public String commitSha;
    public CodeScanningUploadSarifRequestBody withCommitSha(String commitSha) {
        this.commitSha = commitSha;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public CodeScanningUploadSarifRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("sarif")
    public String sarif;
    public CodeScanningUploadSarifRequestBody withSarif(String sarif) {
        this.sarif = sarif;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started_at")
    public OffsetDateTime startedAt;
    public CodeScanningUploadSarifRequestBody withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tool_name")
    public String toolName;
    public CodeScanningUploadSarifRequestBody withToolName(String toolName) {
        this.toolName = toolName;
        return this;
    }
}