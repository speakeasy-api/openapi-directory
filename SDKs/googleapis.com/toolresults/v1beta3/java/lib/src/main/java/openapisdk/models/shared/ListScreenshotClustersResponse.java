package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListScreenshotClustersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusters")
    public ScreenshotCluster[] clusters;
    public ListScreenshotClustersResponse withClusters(ScreenshotCluster[] clusters) {
        this.clusters = clusters;
        return this;
    }
}