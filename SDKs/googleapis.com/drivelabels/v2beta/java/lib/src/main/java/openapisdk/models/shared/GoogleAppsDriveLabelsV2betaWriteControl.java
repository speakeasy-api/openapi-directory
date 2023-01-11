package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaWriteControl
 * Provides control over how write requests are executed. When not specified, the last write wins.
**/
public class GoogleAppsDriveLabelsV2betaWriteControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredRevisionId")
    public String requiredRevisionId;
    public GoogleAppsDriveLabelsV2betaWriteControl withRequiredRevisionId(String requiredRevisionId) {
        this.requiredRevisionId = requiredRevisionId;
        return this;
    }
}