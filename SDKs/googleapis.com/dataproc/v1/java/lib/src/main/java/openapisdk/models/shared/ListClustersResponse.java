package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListClustersResponse
 * The list of all clusters in a project.
**/
public class ListClustersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusters")
    public Cluster[] clusters;
    public ListClustersResponse withClusters(Cluster[] clusters) {
        this.clusters = clusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListClustersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}