package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * TagFilter
 * Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.
**/
public class TagFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagIds")
@SpeakeasyMetadata("form:name=tagIds")
    public String[] tagIds;
    public TagFilter withTagIds(String[] tagIds) {
        this.tagIds = tagIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threshold")
@SpeakeasyMetadata("form:name=threshold")
    public Double threshold;
    public TagFilter withThreshold(Double threshold) {
        this.threshold = threshold;
        return this;
    }
}