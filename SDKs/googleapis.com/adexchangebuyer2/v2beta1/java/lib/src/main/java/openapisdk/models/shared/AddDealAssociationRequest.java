package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddDealAssociationRequest
 * A request for associating a deal and a creative.
**/
public class AddDealAssociationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("association")
    public CreativeDealAssociation association;
    public AddDealAssociationRequest withAssociation(CreativeDealAssociation association) {
        this.association = association;
        return this;
    }
}