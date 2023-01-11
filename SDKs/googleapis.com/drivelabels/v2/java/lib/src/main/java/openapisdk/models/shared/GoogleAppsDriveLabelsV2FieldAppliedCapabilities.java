package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldAppliedCapabilities
 * The capabilities related to this field on applied metadata.
**/
public class GoogleAppsDriveLabelsV2FieldAppliedCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRead")
    public Boolean canRead;
    public GoogleAppsDriveLabelsV2FieldAppliedCapabilities withCanRead(Boolean canRead) {
        this.canRead = canRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canSearch")
    public Boolean canSearch;
    public GoogleAppsDriveLabelsV2FieldAppliedCapabilities withCanSearch(Boolean canSearch) {
        this.canSearch = canSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canWrite")
    public Boolean canWrite;
    public GoogleAppsDriveLabelsV2FieldAppliedCapabilities withCanWrite(Boolean canWrite) {
        this.canWrite = canWrite;
        return this;
    }
}