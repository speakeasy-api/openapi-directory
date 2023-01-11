package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1WebDetectionParams
 * Parameters for web detection request.
**/
public class GoogleCloudVisionV1p1beta1WebDetectionParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeGeoResults")
    public Boolean includeGeoResults;
    public GoogleCloudVisionV1p1beta1WebDetectionParams withIncludeGeoResults(Boolean includeGeoResults) {
        this.includeGeoResults = includeGeoResults;
        return this;
    }
}