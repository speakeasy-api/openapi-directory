package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientInfo
 * Information about the client which invoked the test.
**/
public class ClientInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientInfoDetails")
    public ClientInfoDetail[] clientInfoDetails;
    public ClientInfo withClientInfoDetails(ClientInfoDetail[] clientInfoDetails) {
        this.clientInfoDetails = clientInfoDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ClientInfo withName(String name) {
        this.name = name;
        return this;
    }
}