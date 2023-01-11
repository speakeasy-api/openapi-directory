package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Discoveryclusters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusters")
    public DiscoveryclustersClusters[] clusters;
    public Discoveryclusters withClusters(DiscoveryclustersClusters[] clusters) {
        this.clusters = clusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Discoveryclusters withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalClusters")
    public Integer totalClusters;
    public Discoveryclusters withTotalClusters(Integer totalClusters) {
        this.totalClusters = totalClusters;
        return this;
    }
}