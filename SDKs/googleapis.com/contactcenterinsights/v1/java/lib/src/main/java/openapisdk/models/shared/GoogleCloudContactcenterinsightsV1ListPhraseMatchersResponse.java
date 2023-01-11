package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
 * The response of listing phrase matchers.
**/
public class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatchers")
    public GoogleCloudContactcenterinsightsV1PhraseMatcher[] phraseMatchers;
    public GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse withPhraseMatchers(GoogleCloudContactcenterinsightsV1PhraseMatcher[] phraseMatchers) {
        this.phraseMatchers = phraseMatchers;
        return this;
    }
}