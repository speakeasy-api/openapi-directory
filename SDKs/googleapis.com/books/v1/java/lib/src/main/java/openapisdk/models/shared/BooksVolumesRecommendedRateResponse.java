package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BooksVolumesRecommendedRateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consistency_token")
    public String consistencyToken;
    public BooksVolumesRecommendedRateResponse withConsistencyToken(String consistencyToken) {
        this.consistencyToken = consistencyToken;
        return this;
    }
}