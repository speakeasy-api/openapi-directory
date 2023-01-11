package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetIosPostInstallAttributionResponse
 * Response for iSDK to execute strong match flow for post-install attribution.
**/
public class GetIosPostInstallAttributionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appMinimumVersion")
    public String appMinimumVersion;
    public GetIosPostInstallAttributionResponse withAppMinimumVersion(String appMinimumVersion) {
        this.appMinimumVersion = appMinimumVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributionConfidence")
    public GetIosPostInstallAttributionResponseAttributionConfidenceEnum attributionConfidence;
    public GetIosPostInstallAttributionResponse withAttributionConfidence(GetIosPostInstallAttributionResponseAttributionConfidenceEnum attributionConfidence) {
        this.attributionConfidence = attributionConfidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deepLink")
    public String deepLink;
    public GetIosPostInstallAttributionResponse withDeepLink(String deepLink) {
        this.deepLink = deepLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalBrowserDestinationLink")
    public String externalBrowserDestinationLink;
    public GetIosPostInstallAttributionResponse withExternalBrowserDestinationLink(String externalBrowserDestinationLink) {
        this.externalBrowserDestinationLink = externalBrowserDestinationLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallbackLink")
    public String fallbackLink;
    public GetIosPostInstallAttributionResponse withFallbackLink(String fallbackLink) {
        this.fallbackLink = fallbackLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitationId")
    public String invitationId;
    public GetIosPostInstallAttributionResponse withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isStrongMatchExecutable")
    public Boolean isStrongMatchExecutable;
    public GetIosPostInstallAttributionResponse withIsStrongMatchExecutable(Boolean isStrongMatchExecutable) {
        this.isStrongMatchExecutable = isStrongMatchExecutable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchMessage")
    public String matchMessage;
    public GetIosPostInstallAttributionResponse withMatchMessage(String matchMessage) {
        this.matchMessage = matchMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestIpVersion")
    public GetIosPostInstallAttributionResponseRequestIpVersionEnum requestIpVersion;
    public GetIosPostInstallAttributionResponse withRequestIpVersion(GetIosPostInstallAttributionResponseRequestIpVersionEnum requestIpVersion) {
        this.requestIpVersion = requestIpVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedLink")
    public String requestedLink;
    public GetIosPostInstallAttributionResponse withRequestedLink(String requestedLink) {
        this.requestedLink = requestedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedLink")
    public String resolvedLink;
    public GetIosPostInstallAttributionResponse withResolvedLink(String resolvedLink) {
        this.resolvedLink = resolvedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmCampaign")
    public String utmCampaign;
    public GetIosPostInstallAttributionResponse withUtmCampaign(String utmCampaign) {
        this.utmCampaign = utmCampaign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmContent")
    public String utmContent;
    public GetIosPostInstallAttributionResponse withUtmContent(String utmContent) {
        this.utmContent = utmContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmMedium")
    public String utmMedium;
    public GetIosPostInstallAttributionResponse withUtmMedium(String utmMedium) {
        this.utmMedium = utmMedium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmSource")
    public String utmSource;
    public GetIosPostInstallAttributionResponse withUtmSource(String utmSource) {
        this.utmSource = utmSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmTerm")
    public String utmTerm;
    public GetIosPostInstallAttributionResponse withUtmTerm(String utmTerm) {
        this.utmTerm = utmTerm;
        return this;
    }
}