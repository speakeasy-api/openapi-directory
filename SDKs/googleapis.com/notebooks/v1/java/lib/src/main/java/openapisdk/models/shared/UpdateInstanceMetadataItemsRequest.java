package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateInstanceMetadataItemsRequest
 * Request for adding/changing metadata items for an instance.
**/
public class UpdateInstanceMetadataItemsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public java.util.Map<String, String> items;
    public UpdateInstanceMetadataItemsRequest withItems(java.util.Map<String, String> items) {
        this.items = items;
        return this;
    }
}