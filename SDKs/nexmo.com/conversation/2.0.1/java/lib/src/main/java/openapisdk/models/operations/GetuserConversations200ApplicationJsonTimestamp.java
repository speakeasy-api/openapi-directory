package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetuserConversations200ApplicationJsonTimestamp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public GetuserConversations200ApplicationJsonTimestamp withCreated(String created) {
        this.created = created;
        return this;
    }
}