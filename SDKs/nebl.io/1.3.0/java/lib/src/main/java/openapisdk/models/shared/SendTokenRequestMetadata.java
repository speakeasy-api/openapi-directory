package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendTokenRequestMetadata
 * Object representing all metadata at token issuance
**/
public class SendTokenRequestMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SendTokenRequestMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptions")
    public SendTokenRequestMetadataEncryptions[] encryptions;
    public SendTokenRequestMetadata withEncryptions(SendTokenRequestMetadataEncryptions[] encryptions) {
        this.encryptions = encryptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public SendTokenRequestMetadata withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public SendTokenRequestMetadataRules rules;
    public SendTokenRequestMetadata withRules(SendTokenRequestMetadataRules rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenName")
    public String tokenName;
    public SendTokenRequestMetadata withTokenName(String tokenName) {
        this.tokenName = tokenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public SendTokenRequestMetadataUrls[] urls;
    public SendTokenRequestMetadata withUrls(SendTokenRequestMetadataUrls[] urls) {
        this.urls = urls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userData")
    public SendTokenRequestMetadataUserData userData;
    public SendTokenRequestMetadata withUserData(SendTokenRequestMetadataUserData userData) {
        this.userData = userData;
        return this;
    }
}