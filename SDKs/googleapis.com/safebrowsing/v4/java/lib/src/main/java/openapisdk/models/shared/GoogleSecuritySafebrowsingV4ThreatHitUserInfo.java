package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatHitUserInfo
 * Details about the user that encountered the threat.
**/
public class GoogleSecuritySafebrowsingV4ThreatHitUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public GoogleSecuritySafebrowsingV4ThreatHitUserInfo withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public GoogleSecuritySafebrowsingV4ThreatHitUserInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}