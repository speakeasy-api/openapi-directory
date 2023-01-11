package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCredentialAwsListCredentialAwsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public openapisdk.models.shared.AccountsV1CredentialCredentialAws[] credentials;
    public ListCredentialAwsListCredentialAwsResponse withCredentials(openapisdk.models.shared.AccountsV1CredentialCredentialAws[] credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCredentialAwsListCredentialAwsResponseMeta meta;
    public ListCredentialAwsListCredentialAwsResponse withMeta(ListCredentialAwsListCredentialAwsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}