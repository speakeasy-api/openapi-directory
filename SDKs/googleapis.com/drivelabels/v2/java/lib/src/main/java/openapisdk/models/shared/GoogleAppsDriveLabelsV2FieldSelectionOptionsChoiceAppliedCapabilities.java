package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities
 * The capabilities related to this choice on applied metadata.
**/
public class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canRead")
    public Boolean canRead;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities withCanRead(Boolean canRead) {
        this.canRead = canRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canSearch")
    public Boolean canSearch;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities withCanSearch(Boolean canSearch) {
        this.canSearch = canSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canSelect")
    public Boolean canSelect;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities withCanSelect(Boolean canSelect) {
        this.canSelect = canSelect;
        return this;
    }
}