package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectNewgisticsRequestBody
 * A Newgistics account information request body
**/
public class ConnectNewgisticsRequestBody {
    @JsonProperty("induction_site")
    public String inductionSite;
    public ConnectNewgisticsRequestBody withInductionSite(String inductionSite) {
        this.inductionSite = inductionSite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mailer_id")
    public Integer mailerId;
    public ConnectNewgisticsRequestBody withMailerId(Integer mailerId) {
        this.mailerId = mailerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant_id")
    public Integer merchantId;
    public ConnectNewgisticsRequestBody withMerchantId(Integer merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectNewgisticsRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}