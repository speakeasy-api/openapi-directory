package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1SecurityProjection
 * Contains various ways of describing the impact on Security.
**/
public class GoogleCloudRecommenderV1SecurityProjection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, Object> details;
    public GoogleCloudRecommenderV1SecurityProjection withDetails(java.util.Map<String, Object> details) {
        this.details = details;
        return this;
    }
}