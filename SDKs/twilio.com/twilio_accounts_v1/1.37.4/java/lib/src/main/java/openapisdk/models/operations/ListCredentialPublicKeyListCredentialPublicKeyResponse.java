package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCredentialPublicKeyListCredentialPublicKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey[] credentials;
    public ListCredentialPublicKeyListCredentialPublicKeyResponse withCredentials(openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey[] credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCredentialPublicKeyListCredentialPublicKeyResponseMeta meta;
    public ListCredentialPublicKeyListCredentialPublicKeyResponse withMeta(ListCredentialPublicKeyListCredentialPublicKeyResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}