package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDealAssociationsResponse
 * A response for listing creative and deal associations
**/
public class ListDealAssociationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associations")
    public CreativeDealAssociation[] associations;
    public ListDealAssociationsResponse withAssociations(CreativeDealAssociation[] associations) {
        this.associations = associations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDealAssociationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}