package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateTransactionTagsRequest
 * Request to add or remove tags associated with a transaction.
 * 
**/
public class UpdateTransactionTagsRequest {
    @JsonProperty("data")
    public TagInputResourceIdentifier[] data;
    public UpdateTransactionTagsRequest withData(TagInputResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
}