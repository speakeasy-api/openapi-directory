package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOfferingsOfferingIdMetadataTagsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PutOfferingsOfferingIdMetadataTagsRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}