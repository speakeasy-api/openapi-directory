package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProvidersResponse
 * The response message for the `ListProviders` method.
**/
public class ListProvidersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListProvidersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providers")
    public Provider[] providers;
    public ListProvidersResponse withProviders(Provider[] providers) {
        this.providers = providers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListProvidersResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}