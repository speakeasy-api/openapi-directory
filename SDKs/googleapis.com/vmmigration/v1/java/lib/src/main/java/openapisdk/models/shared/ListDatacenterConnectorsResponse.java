package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDatacenterConnectorsResponse
 * Response message for 'ListDatacenterConnectors' request.
**/
public class ListDatacenterConnectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datacenterConnectors")
    public DatacenterConnector[] datacenterConnectors;
    public ListDatacenterConnectorsResponse withDatacenterConnectors(DatacenterConnector[] datacenterConnectors) {
        this.datacenterConnectors = datacenterConnectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDatacenterConnectorsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListDatacenterConnectorsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}