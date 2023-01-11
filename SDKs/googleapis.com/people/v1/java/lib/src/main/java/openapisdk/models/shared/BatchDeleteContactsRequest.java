package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDeleteContactsRequest
 * A request to delete a batch of existing contacts.
**/
public class BatchDeleteContactsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceNames")
    public String[] resourceNames;
    public BatchDeleteContactsRequest withResourceNames(String[] resourceNames) {
        this.resourceNames = resourceNames;
        return this;
    }
}