package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestDetails
 * Contains the integrity request information.
**/
public class RequestDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public String nonce;
    public RequestDetails withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestPackageName")
    public String requestPackageName;
    public RequestDetails withRequestPackageName(String requestPackageName) {
        this.requestPackageName = requestPackageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestampMillis")
    public String timestampMillis;
    public RequestDetails withTimestampMillis(String timestampMillis) {
        this.timestampMillis = timestampMillis;
        return this;
    }
}