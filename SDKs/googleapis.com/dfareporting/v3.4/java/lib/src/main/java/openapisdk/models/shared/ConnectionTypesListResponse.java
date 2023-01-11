package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionTypesListResponse
 * Connection Type List Response
**/
public class ConnectionTypesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionTypes")
    public ConnectionType[] connectionTypes;
    public ConnectionTypesListResponse withConnectionTypes(ConnectionType[] connectionTypes) {
        this.connectionTypes = connectionTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConnectionTypesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}