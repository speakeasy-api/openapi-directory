package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TableLocation
 * Location of a finding within a table.
**/
public class GooglePrivacyDlpV2TableLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowIndex")
    public String rowIndex;
    public GooglePrivacyDlpV2TableLocation withRowIndex(String rowIndex) {
        this.rowIndex = rowIndex;
        return this;
    }
}