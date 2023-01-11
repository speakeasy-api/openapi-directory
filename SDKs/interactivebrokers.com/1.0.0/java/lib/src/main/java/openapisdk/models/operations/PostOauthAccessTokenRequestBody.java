package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOauthAccessTokenRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_consumer_key")
    public String oauthConsumerKey;
    public PostOauthAccessTokenRequestBody withOauthConsumerKey(String oauthConsumerKey) {
        this.oauthConsumerKey = oauthConsumerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_nonce")
    public String oauthNonce;
    public PostOauthAccessTokenRequestBody withOauthNonce(String oauthNonce) {
        this.oauthNonce = oauthNonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_signature")
    public String oauthSignature;
    public PostOauthAccessTokenRequestBody withOauthSignature(String oauthSignature) {
        this.oauthSignature = oauthSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_signature_method")
    public String oauthSignatureMethod;
    public PostOauthAccessTokenRequestBody withOauthSignatureMethod(String oauthSignatureMethod) {
        this.oauthSignatureMethod = oauthSignatureMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_timestamp")
    public String oauthTimestamp;
    public PostOauthAccessTokenRequestBody withOauthTimestamp(String oauthTimestamp) {
        this.oauthTimestamp = oauthTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_token")
    public String oauthToken;
    public PostOauthAccessTokenRequestBody withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_verifier")
    public String oauthVerifier;
    public PostOauthAccessTokenRequestBody withOauthVerifier(String oauthVerifier) {
        this.oauthVerifier = oauthVerifier;
        return this;
    }
}