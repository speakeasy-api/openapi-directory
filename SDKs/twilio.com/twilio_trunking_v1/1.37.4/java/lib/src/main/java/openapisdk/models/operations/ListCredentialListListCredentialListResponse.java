package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCredentialListListCredentialListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential_lists")
    public openapisdk.models.shared.TrunkingV1TrunkCredentialList[] credentialLists;
    public ListCredentialListListCredentialListResponse withCredentialLists(openapisdk.models.shared.TrunkingV1TrunkCredentialList[] credentialLists) {
        this.credentialLists = credentialLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCredentialListListCredentialListResponseMeta meta;
    public ListCredentialListListCredentialListResponse withMeta(ListCredentialListListCredentialListResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}