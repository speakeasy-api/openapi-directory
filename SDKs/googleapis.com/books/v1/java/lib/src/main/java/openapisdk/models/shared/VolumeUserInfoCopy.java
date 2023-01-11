package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeUserInfoCopy
 * Copy/Paste accounting information.
**/
public class VolumeUserInfoCopy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedCharacterCount")
    public Integer allowedCharacterCount;
    public VolumeUserInfoCopy withAllowedCharacterCount(Integer allowedCharacterCount) {
        this.allowedCharacterCount = allowedCharacterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitType")
    public String limitType;
    public VolumeUserInfoCopy withLimitType(String limitType) {
        this.limitType = limitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingCharacterCount")
    public Integer remainingCharacterCount;
    public VolumeUserInfoCopy withRemainingCharacterCount(Integer remainingCharacterCount) {
        this.remainingCharacterCount = remainingCharacterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public VolumeUserInfoCopy withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}