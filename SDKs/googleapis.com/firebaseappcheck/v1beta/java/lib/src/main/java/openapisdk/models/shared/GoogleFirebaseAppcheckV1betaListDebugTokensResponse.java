package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaListDebugTokensResponse
 * Response message for the ListDebugTokens method.
**/
public class GoogleFirebaseAppcheckV1betaListDebugTokensResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugTokens")
    public GoogleFirebaseAppcheckV1betaDebugToken[] debugTokens;
    public GoogleFirebaseAppcheckV1betaListDebugTokensResponse withDebugTokens(GoogleFirebaseAppcheckV1betaDebugToken[] debugTokens) {
        this.debugTokens = debugTokens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFirebaseAppcheckV1betaListDebugTokensResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}