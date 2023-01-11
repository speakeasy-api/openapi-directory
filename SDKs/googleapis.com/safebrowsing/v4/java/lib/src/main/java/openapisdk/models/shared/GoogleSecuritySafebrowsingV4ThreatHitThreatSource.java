package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4ThreatHitThreatSource
 * A single resource related to a threat hit.
**/
public class GoogleSecuritySafebrowsingV4ThreatHitThreatSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referrer")
    public String referrer;
    public GoogleSecuritySafebrowsingV4ThreatHitThreatSource withReferrer(String referrer) {
        this.referrer = referrer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteIp")
    public String remoteIp;
    public GoogleSecuritySafebrowsingV4ThreatHitThreatSource withRemoteIp(String remoteIp) {
        this.remoteIp = remoteIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum type;
    public GoogleSecuritySafebrowsingV4ThreatHitThreatSource withType(GoogleSecuritySafebrowsingV4ThreatHitThreatSourceTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoogleSecuritySafebrowsingV4ThreatHitThreatSource withUrl(String url) {
        this.url = url;
        return this;
    }
}