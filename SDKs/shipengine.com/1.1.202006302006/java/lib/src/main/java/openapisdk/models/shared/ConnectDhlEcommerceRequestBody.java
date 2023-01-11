package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectDhlEcommerceRequestBody
 * A DHL Ecommerce account information request body
**/
public class ConnectDhlEcommerceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectDhlEcommerceRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ancillary_endorsement")
    public AncillaryServiceEndorsementEnum ancillaryEndorsement;
    public ConnectDhlEcommerceRequestBody withAncillaryEndorsement(AncillaryServiceEndorsementEnum ancillaryEndorsement) {
        this.ancillaryEndorsement = ancillaryEndorsement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_key")
    public String apiKey;
    public ConnectDhlEcommerceRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_secret")
    public String apiSecret;
    public ConnectDhlEcommerceRequestBody withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @JsonProperty("client_id")
    public String clientId;
    public ConnectDhlEcommerceRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("distribution_center")
    public String distributionCenter;
    public ConnectDhlEcommerceRequestBody withDistributionCenter(String distributionCenter) {
        this.distributionCenter = distributionCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ftp_password")
    public String ftpPassword;
    public ConnectDhlEcommerceRequestBody withFtpPassword(String ftpPassword) {
        this.ftpPassword = ftpPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ftp_username")
    public String ftpUsername;
    public ConnectDhlEcommerceRequestBody withFtpUsername(String ftpUsername) {
        this.ftpUsername = ftpUsername;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectDhlEcommerceRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ConnectDhlEcommerceRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("pickup_number")
    public String pickupNumber;
    public ConnectDhlEcommerceRequestBody withPickupNumber(String pickupNumber) {
        this.pickupNumber = pickupNumber;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ConnectDhlEcommerceRequestBody withUsername(String username) {
        this.username = username;
        return this;
    }
}