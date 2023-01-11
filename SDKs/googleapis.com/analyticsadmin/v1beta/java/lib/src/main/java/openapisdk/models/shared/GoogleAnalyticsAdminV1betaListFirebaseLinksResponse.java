package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListFirebaseLinksResponse
 * Response message for ListFirebaseLinks RPC
**/
public class GoogleAnalyticsAdminV1betaListFirebaseLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firebaseLinks")
    public GoogleAnalyticsAdminV1betaFirebaseLink[] firebaseLinks;
    public GoogleAnalyticsAdminV1betaListFirebaseLinksResponse withFirebaseLinks(GoogleAnalyticsAdminV1betaFirebaseLink[] firebaseLinks) {
        this.firebaseLinks = firebaseLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListFirebaseLinksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}