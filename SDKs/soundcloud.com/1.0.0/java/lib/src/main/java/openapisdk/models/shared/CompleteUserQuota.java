package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompleteUserQuota
 * user's upload quota
**/
public class CompleteUserQuota {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited_upload_quota")
    public Boolean unlimitedUploadQuota;
    public CompleteUserQuota withUnlimitedUploadQuota(Boolean unlimitedUploadQuota) {
        this.unlimitedUploadQuota = unlimitedUploadQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upload_seconds_used")
    public Long uploadSecondsUsed;
    public CompleteUserQuota withUploadSecondsUsed(Long uploadSecondsUsed) {
        this.uploadSecondsUsed = uploadSecondsUsed;
        return this;
    }
}