package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOauthLiveSessionTokenRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffie_hellman_challenge")
    public String diffieHellmanChallenge;
    public PostOauthLiveSessionTokenRequestBody withDiffieHellmanChallenge(String diffieHellmanChallenge) {
        this.diffieHellmanChallenge = diffieHellmanChallenge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_consumer_key")
    public String oauthConsumerKey;
    public PostOauthLiveSessionTokenRequestBody withOauthConsumerKey(String oauthConsumerKey) {
        this.oauthConsumerKey = oauthConsumerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_nonce")
    public String oauthNonce;
    public PostOauthLiveSessionTokenRequestBody withOauthNonce(String oauthNonce) {
        this.oauthNonce = oauthNonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_signature")
    public String oauthSignature;
    public PostOauthLiveSessionTokenRequestBody withOauthSignature(String oauthSignature) {
        this.oauthSignature = oauthSignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_signature_method")
    public String oauthSignatureMethod;
    public PostOauthLiveSessionTokenRequestBody withOauthSignatureMethod(String oauthSignatureMethod) {
        this.oauthSignatureMethod = oauthSignatureMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_timestamp")
    public String oauthTimestamp;
    public PostOauthLiveSessionTokenRequestBody withOauthTimestamp(String oauthTimestamp) {
        this.oauthTimestamp = oauthTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_token")
    public String oauthToken;
    public PostOauthLiveSessionTokenRequestBody withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
}