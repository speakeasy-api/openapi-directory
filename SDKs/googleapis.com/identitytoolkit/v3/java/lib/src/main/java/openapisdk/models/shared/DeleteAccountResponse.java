package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteAccountResponse
 * Respone of deleting account.
**/
public class DeleteAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DeleteAccountResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}