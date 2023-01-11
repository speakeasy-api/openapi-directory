package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonParent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database_id")
    public String databaseId;
    public UpdatePageProperties200ApplicationJsonParent withDatabaseId(String databaseId) {
        this.databaseId = databaseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePageProperties200ApplicationJsonParent withType(String type) {
        this.type = type;
        return this;
    }
}