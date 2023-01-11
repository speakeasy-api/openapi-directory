package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2HybridInspectJobTriggerRequest
 * Request to search for potentially sensitive info in a custom location.
**/
public class GooglePrivacyDlpV2HybridInspectJobTriggerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hybridItem")
    public GooglePrivacyDlpV2HybridContentItem hybridItem;
    public GooglePrivacyDlpV2HybridInspectJobTriggerRequest withHybridItem(GooglePrivacyDlpV2HybridContentItem hybridItem) {
        this.hybridItem = hybridItem;
        return this;
    }
}