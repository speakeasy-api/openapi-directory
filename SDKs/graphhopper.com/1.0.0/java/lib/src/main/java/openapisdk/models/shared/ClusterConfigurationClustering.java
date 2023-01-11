package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClusterConfigurationClustering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_quantity")
    public Double maxQuantity;
    public ClusterConfigurationClustering withMaxQuantity(Double maxQuantity) {
        this.maxQuantity = maxQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min_quantity")
    public Double minQuantity;
    public ClusterConfigurationClustering withMinQuantity(Double minQuantity) {
        this.minQuantity = minQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_clusters")
    public Double numClusters;
    public ClusterConfigurationClustering withNumClusters(Double numClusters) {
        this.numClusters = numClusters;
        return this;
    }
}