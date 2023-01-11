package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreativeFilteringReasonsReasons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteringCount")
    public String filteringCount;
    public CreativeFilteringReasonsReasons withFilteringCount(String filteringCount) {
        this.filteringCount = filteringCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteringStatus")
    public Integer filteringStatus;
    public CreativeFilteringReasonsReasons withFilteringStatus(Integer filteringStatus) {
        this.filteringStatus = filteringStatus;
        return this;
    }
}