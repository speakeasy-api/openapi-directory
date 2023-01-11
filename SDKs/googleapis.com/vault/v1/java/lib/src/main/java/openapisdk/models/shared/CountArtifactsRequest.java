package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CountArtifactsRequest
 * Count artifacts request.
**/
public class CountArtifactsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public Query query;
    public CountArtifactsRequest withQuery(Query query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view")
    public CountArtifactsRequestViewEnum view;
    public CountArtifactsRequest withView(CountArtifactsRequestViewEnum view) {
        this.view = view;
        return this;
    }
}