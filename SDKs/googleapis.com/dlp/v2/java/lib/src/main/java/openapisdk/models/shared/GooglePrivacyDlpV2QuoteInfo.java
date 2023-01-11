package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2QuoteInfo
 * Message for infoType-dependent details parsed from quote.
**/
public class GooglePrivacyDlpV2QuoteInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTime")
    public GooglePrivacyDlpV2DateTime dateTime;
    public GooglePrivacyDlpV2QuoteInfo withDateTime(GooglePrivacyDlpV2DateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
}