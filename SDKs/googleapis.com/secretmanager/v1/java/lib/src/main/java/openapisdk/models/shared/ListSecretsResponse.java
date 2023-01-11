package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSecretsResponse
 * Response message for SecretManagerService.ListSecrets.
**/
public class ListSecretsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSecretsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secrets")
    public Secret[] secrets;
    public ListSecretsResponse withSecrets(Secret[] secrets) {
        this.secrets = secrets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public ListSecretsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}