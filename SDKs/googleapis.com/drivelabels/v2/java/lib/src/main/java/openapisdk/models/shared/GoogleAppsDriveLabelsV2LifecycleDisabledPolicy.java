package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2LifecycleDisabledPolicy
 * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
**/
public class GoogleAppsDriveLabelsV2LifecycleDisabledPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hideInSearch")
    public Boolean hideInSearch;
    public GoogleAppsDriveLabelsV2LifecycleDisabledPolicy withHideInSearch(Boolean hideInSearch) {
        this.hideInSearch = hideInSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showInApply")
    public Boolean showInApply;
    public GoogleAppsDriveLabelsV2LifecycleDisabledPolicy withShowInApply(Boolean showInApply) {
        this.showInApply = showInApply;
        return this;
    }
}