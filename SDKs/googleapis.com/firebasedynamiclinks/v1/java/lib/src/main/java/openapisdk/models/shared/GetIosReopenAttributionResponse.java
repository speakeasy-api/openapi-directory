package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetIosReopenAttributionResponse
 * Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
public class GetIosReopenAttributionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deepLink")
    public String deepLink;
    public GetIosReopenAttributionResponse withDeepLink(String deepLink) {
        this.deepLink = deepLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitationId")
    public String invitationId;
    public GetIosReopenAttributionResponse withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosMinAppVersion")
    public String iosMinAppVersion;
    public GetIosReopenAttributionResponse withIosMinAppVersion(String iosMinAppVersion) {
        this.iosMinAppVersion = iosMinAppVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedLink")
    public String resolvedLink;
    public GetIosReopenAttributionResponse withResolvedLink(String resolvedLink) {
        this.resolvedLink = resolvedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmCampaign")
    public String utmCampaign;
    public GetIosReopenAttributionResponse withUtmCampaign(String utmCampaign) {
        this.utmCampaign = utmCampaign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmContent")
    public String utmContent;
    public GetIosReopenAttributionResponse withUtmContent(String utmContent) {
        this.utmContent = utmContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmMedium")
    public String utmMedium;
    public GetIosReopenAttributionResponse withUtmMedium(String utmMedium) {
        this.utmMedium = utmMedium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmSource")
    public String utmSource;
    public GetIosReopenAttributionResponse withUtmSource(String utmSource) {
        this.utmSource = utmSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utmTerm")
    public String utmTerm;
    public GetIosReopenAttributionResponse withUtmTerm(String utmTerm) {
        this.utmTerm = utmTerm;
        return this;
    }
}