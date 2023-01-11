package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalPostOffer
 * Specific fields for offer posts.
**/
public class LocalPostOffer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponCode")
    public String couponCode;
    public LocalPostOffer withCouponCode(String couponCode) {
        this.couponCode = couponCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redeemOnlineUrl")
    public String redeemOnlineUrl;
    public LocalPostOffer withRedeemOnlineUrl(String redeemOnlineUrl) {
        this.redeemOnlineUrl = redeemOnlineUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsConditions")
    public String termsConditions;
    public LocalPostOffer withTermsConditions(String termsConditions) {
        this.termsConditions = termsConditions;
        return this;
    }
}