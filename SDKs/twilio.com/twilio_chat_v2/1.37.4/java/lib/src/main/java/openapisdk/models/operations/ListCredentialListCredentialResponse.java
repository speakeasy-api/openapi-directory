package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCredentialListCredentialResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public openapisdk.models.shared.ChatV2Credential[] credentials;
    public ListCredentialListCredentialResponse withCredentials(openapisdk.models.shared.ChatV2Credential[] credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCredentialListCredentialResponseMeta meta;
    public ListCredentialListCredentialResponse withMeta(ListCredentialListCredentialResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}