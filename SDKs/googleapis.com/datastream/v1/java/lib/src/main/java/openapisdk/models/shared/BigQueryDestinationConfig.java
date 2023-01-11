package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BigQueryDestinationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFreshness")
    public String dataFreshness;
    public BigQueryDestinationConfig withDataFreshness(String dataFreshness) {
        this.dataFreshness = dataFreshness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleTargetDataset")
    public SingleTargetDataset singleTargetDataset;
    public BigQueryDestinationConfig withSingleTargetDataset(SingleTargetDataset singleTargetDataset) {
        this.singleTargetDataset = singleTargetDataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceHierarchyDatasets")
    public SourceHierarchyDatasets sourceHierarchyDatasets;
    public BigQueryDestinationConfig withSourceHierarchyDatasets(SourceHierarchyDatasets sourceHierarchyDatasets) {
        this.sourceHierarchyDatasets = sourceHierarchyDatasets;
        return this;
    }
}