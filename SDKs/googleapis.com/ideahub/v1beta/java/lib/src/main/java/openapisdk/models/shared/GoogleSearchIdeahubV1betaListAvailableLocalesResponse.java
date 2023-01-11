package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1betaListAvailableLocalesResponse
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
public class GoogleSearchIdeahubV1betaListAvailableLocalesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableLocales")
    public GoogleSearchIdeahubV1betaAvailableLocale[] availableLocales;
    public GoogleSearchIdeahubV1betaListAvailableLocalesResponse withAvailableLocales(GoogleSearchIdeahubV1betaAvailableLocale[] availableLocales) {
        this.availableLocales = availableLocales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleSearchIdeahubV1betaListAvailableLocalesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}