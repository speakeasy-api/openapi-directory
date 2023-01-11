package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RequisitionLinks
 * RequisitionLinksSerializer.
**/
public class RequisitionLinks {
    @JsonProperty("initiate")
    public String initiate;
    public RequisitionLinks withInitiate(String initiate) {
        this.initiate = initiate;
        return this;
    }
}