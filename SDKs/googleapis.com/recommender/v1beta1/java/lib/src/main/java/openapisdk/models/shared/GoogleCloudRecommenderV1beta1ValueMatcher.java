package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudRecommenderV1beta1ValueMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchesPattern")
    public String matchesPattern;
    public GoogleCloudRecommenderV1beta1ValueMatcher withMatchesPattern(String matchesPattern) {
        this.matchesPattern = matchesPattern;
        return this;
    }
}