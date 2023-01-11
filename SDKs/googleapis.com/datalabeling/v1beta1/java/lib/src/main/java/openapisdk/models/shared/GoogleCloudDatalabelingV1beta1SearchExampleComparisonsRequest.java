package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest
 * Request message of SearchExampleComparisons.
**/
public class GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}