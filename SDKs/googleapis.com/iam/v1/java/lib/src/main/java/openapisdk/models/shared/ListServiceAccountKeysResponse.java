package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListServiceAccountKeysResponse
 * The service account keys list response.
**/
public class ListServiceAccountKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public ServiceAccountKey[] keys;
    public ListServiceAccountKeysResponse withKeys(ServiceAccountKey[] keys) {
        this.keys = keys;
        return this;
    }
}