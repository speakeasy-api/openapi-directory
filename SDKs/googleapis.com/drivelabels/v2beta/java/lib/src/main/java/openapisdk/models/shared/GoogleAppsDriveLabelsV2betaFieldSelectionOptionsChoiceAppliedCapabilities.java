package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities
 * The capabilities related to this choice on applied metadata.
**/
public class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRead")
    public Boolean canRead;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities withCanRead(Boolean canRead) {
        this.canRead = canRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canSearch")
    public Boolean canSearch;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities withCanSearch(Boolean canSearch) {
        this.canSearch = canSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canSelect")
    public Boolean canSelect;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities withCanSelect(Boolean canSelect) {
        this.canSelect = canSelect;
        return this;
    }
}