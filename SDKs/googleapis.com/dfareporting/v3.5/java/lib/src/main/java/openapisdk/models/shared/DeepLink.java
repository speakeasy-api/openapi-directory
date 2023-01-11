package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeepLink
 * Contains information about a landing page deep link.
**/
public class DeepLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appUrl")
    public String appUrl;
    public DeepLink withAppUrl(String appUrl) {
        this.appUrl = appUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallbackUrl")
    public String fallbackUrl;
    public DeepLink withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DeepLink withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApp")
    public MobileApp mobileApp;
    public DeepLink withMobileApp(MobileApp mobileApp) {
        this.mobileApp = mobileApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remarketingListIds")
    public String[] remarketingListIds;
    public DeepLink withRemarketingListIds(String[] remarketingListIds) {
        this.remarketingListIds = remarketingListIds;
        return this;
    }
}