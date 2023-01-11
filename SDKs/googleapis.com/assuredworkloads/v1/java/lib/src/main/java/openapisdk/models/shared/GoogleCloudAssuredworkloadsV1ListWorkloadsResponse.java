package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1ListWorkloadsResponse
 * Response of ListWorkloads endpoint.
**/
public class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudAssuredworkloadsV1ListWorkloadsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workloads")
    public GoogleCloudAssuredworkloadsV1Workload[] workloads;
    public GoogleCloudAssuredworkloadsV1ListWorkloadsResponse withWorkloads(GoogleCloudAssuredworkloadsV1Workload[] workloads) {
        this.workloads = workloads;
        return this;
    }
}