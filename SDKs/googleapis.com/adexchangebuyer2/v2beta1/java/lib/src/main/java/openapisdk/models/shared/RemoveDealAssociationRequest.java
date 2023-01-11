package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveDealAssociationRequest
 * A request for removing the association between a deal and a creative.
**/
public class RemoveDealAssociationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("association")
    public CreativeDealAssociation association;
    public RemoveDealAssociationRequest withAssociation(CreativeDealAssociation association) {
        this.association = association;
        return this;
    }
}