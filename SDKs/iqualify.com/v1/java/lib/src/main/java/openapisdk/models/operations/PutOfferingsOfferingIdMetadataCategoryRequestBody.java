package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOfferingsOfferingIdMetadataCategoryRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public PutOfferingsOfferingIdMetadataCategoryRequestBody withCategory(String category) {
        this.category = category;
        return this;
    }
}