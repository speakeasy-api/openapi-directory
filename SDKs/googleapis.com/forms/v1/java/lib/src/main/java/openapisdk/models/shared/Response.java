package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Response
 * A single response from an update.
**/
public class Response {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createItem")
    public CreateItemResponse createItem;
    public Response withCreateItem(CreateItemResponse createItem) {
        this.createItem = createItem;
        return this;
    }
}