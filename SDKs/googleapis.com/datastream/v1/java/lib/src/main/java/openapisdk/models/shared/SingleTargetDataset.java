package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SingleTargetDataset
 * A single target dataset to which all data will be streamed.
**/
public class SingleTargetDataset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetId")
    public String datasetId;
    public SingleTargetDataset withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}