package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSearchIdeahubV1alphaListAvailableLocalesResponse
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
**/
public class GoogleSearchIdeahubV1alphaListAvailableLocalesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableLocales")
    public GoogleSearchIdeahubV1alphaAvailableLocale[] availableLocales;
    public GoogleSearchIdeahubV1alphaListAvailableLocalesResponse withAvailableLocales(GoogleSearchIdeahubV1alphaAvailableLocale[] availableLocales) {
        this.availableLocales = availableLocales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleSearchIdeahubV1alphaListAvailableLocalesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}