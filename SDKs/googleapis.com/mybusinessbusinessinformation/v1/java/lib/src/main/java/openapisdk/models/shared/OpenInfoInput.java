package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OpenInfoInput
 * Information related to the opening state of the business.
**/
public class OpenInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openingDate")
    public Date openingDate;
    public OpenInfoInput withOpeningDate(Date openingDate) {
        this.openingDate = openingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OpenInfoStatusEnum status;
    public OpenInfoInput withStatus(OpenInfoStatusEnum status) {
        this.status = status;
        return this;
    }
}