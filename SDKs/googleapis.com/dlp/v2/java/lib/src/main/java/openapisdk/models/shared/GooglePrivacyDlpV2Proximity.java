package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Proximity
 * Message for specifying a window around a finding to apply a detection rule.
**/
public class GooglePrivacyDlpV2Proximity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowAfter")
    public Integer windowAfter;
    public GooglePrivacyDlpV2Proximity withWindowAfter(Integer windowAfter) {
        this.windowAfter = windowAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowBefore")
    public Integer windowBefore;
    public GooglePrivacyDlpV2Proximity withWindowBefore(Integer windowBefore) {
        this.windowBefore = windowBefore;
        return this;
    }
}