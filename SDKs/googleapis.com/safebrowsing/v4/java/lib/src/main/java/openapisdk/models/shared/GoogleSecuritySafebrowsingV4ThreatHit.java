package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleSecuritySafebrowsingV4ThreatHit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientInfo")
    public GoogleSecuritySafebrowsingV4ClientInfo clientInfo;
    public GoogleSecuritySafebrowsingV4ThreatHit withClientInfo(GoogleSecuritySafebrowsingV4ClientInfo clientInfo) {
        this.clientInfo = clientInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry")
    public GoogleSecuritySafebrowsingV4ThreatEntry entry;
    public GoogleSecuritySafebrowsingV4ThreatHit withEntry(GoogleSecuritySafebrowsingV4ThreatEntry entry) {
        this.entry = entry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformType")
    public GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum platformType;
    public GoogleSecuritySafebrowsingV4ThreatHit withPlatformType(GoogleSecuritySafebrowsingV4ThreatHitPlatformTypeEnum platformType) {
        this.platformType = platformType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public GoogleSecuritySafebrowsingV4ThreatHitThreatSource[] resources;
    public GoogleSecuritySafebrowsingV4ThreatHit withResources(GoogleSecuritySafebrowsingV4ThreatHitThreatSource[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threatType")
    public GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum threatType;
    public GoogleSecuritySafebrowsingV4ThreatHit withThreatType(GoogleSecuritySafebrowsingV4ThreatHitThreatTypeEnum threatType) {
        this.threatType = threatType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInfo")
    public GoogleSecuritySafebrowsingV4ThreatHitUserInfo userInfo;
    public GoogleSecuritySafebrowsingV4ThreatHit withUserInfo(GoogleSecuritySafebrowsingV4ThreatHitUserInfo userInfo) {
        this.userInfo = userInfo;
        return this;
    }
}