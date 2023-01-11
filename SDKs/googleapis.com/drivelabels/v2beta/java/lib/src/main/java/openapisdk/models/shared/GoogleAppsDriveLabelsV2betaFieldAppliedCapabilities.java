package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities
 * The capabilities related to this field on applied metadata.
**/
public class GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRead")
    public Boolean canRead;
    public GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities withCanRead(Boolean canRead) {
        this.canRead = canRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canSearch")
    public Boolean canSearch;
    public GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities withCanSearch(Boolean canSearch) {
        this.canSearch = canSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canWrite")
    public Boolean canWrite;
    public GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities withCanWrite(Boolean canWrite) {
        this.canWrite = canWrite;
        return this;
    }
}