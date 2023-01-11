package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListPropertiesResponse
 * Response message for ListProperties RPC.
**/
public class GoogleAnalyticsAdminV1betaListPropertiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListPropertiesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAnalyticsAdminV1betaProperty[] properties;
    public GoogleAnalyticsAdminV1betaListPropertiesResponse withProperties(GoogleAnalyticsAdminV1betaProperty[] properties) {
        this.properties = properties;
        return this;
    }
}