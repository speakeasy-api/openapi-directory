package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1ListDebugTokensResponse
 * Response message for the ListDebugTokens method.
**/
public class GoogleFirebaseAppcheckV1ListDebugTokensResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugTokens")
    public GoogleFirebaseAppcheckV1DebugToken[] debugTokens;
    public GoogleFirebaseAppcheckV1ListDebugTokensResponse withDebugTokens(GoogleFirebaseAppcheckV1DebugToken[] debugTokens) {
        this.debugTokens = debugTokens;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFirebaseAppcheckV1ListDebugTokensResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}