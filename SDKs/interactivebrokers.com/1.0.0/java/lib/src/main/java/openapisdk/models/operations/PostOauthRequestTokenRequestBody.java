package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOauthRequestTokenRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_callback")
    public String oauthCallback;
    public PostOauthRequestTokenRequestBody withOauthCallback(String oauthCallback) {
        this.oauthCallback = oauthCallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_consumer_key")
    public String oauthConsumerKey;
    public PostOauthRequestTokenRequestBody withOauthConsumerKey(String oauthConsumerKey) {
        this.oauthConsumerKey = oauthConsumerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_nonce")
    public String oauthNonce;
    public PostOauthRequestTokenRequestBody withOauthNonce(String oauthNonce) {
        this.oauthNonce = oauthNonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_signature")
    public String oauthSignature;
    public PostOauthRequestTokenRequestBody withOauthSignature(String oauthSignature) {
        this.oauthSignature = oauthSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_signature_method")
    public String oauthSignatureMethod;
    public PostOauthRequestTokenRequestBody withOauthSignatureMethod(String oauthSignatureMethod) {
        this.oauthSignatureMethod = oauthSignatureMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_timestamp")
    public String oauthTimestamp;
    public PostOauthRequestTokenRequestBody withOauthTimestamp(String oauthTimestamp) {
        this.oauthTimestamp = oauthTimestamp;
        return this;
    }
}