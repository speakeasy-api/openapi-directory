package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BranchModelResults
 * Holds results from a paged query returning BranchModel values
**/
public class BranchModelResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Integer count;
    public BranchModelResults withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public BranchModel[] data;
    public BranchModelResults withData(BranchModel[] data) {
        this.data = data;
        return this;
    }
}