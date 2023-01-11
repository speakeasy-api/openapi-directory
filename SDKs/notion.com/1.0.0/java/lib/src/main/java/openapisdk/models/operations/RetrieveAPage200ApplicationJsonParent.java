package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveAPage200ApplicationJsonParent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database_id")
    public String databaseId;
    public RetrieveAPage200ApplicationJsonParent withDatabaseId(String databaseId) {
        this.databaseId = databaseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveAPage200ApplicationJsonParent withType(String type) {
        this.type = type;
        return this;
    }
}