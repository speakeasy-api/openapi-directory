package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOfferingsOfferingIdMetadataLevelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public String level;
    public PutOfferingsOfferingIdMetadataLevelRequestBody withLevel(String level) {
        this.level = level;
        return this;
    }
}