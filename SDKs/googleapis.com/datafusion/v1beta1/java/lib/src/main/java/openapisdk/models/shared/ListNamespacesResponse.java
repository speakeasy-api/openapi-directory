package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNamespacesResponse
 * List namespaces response.
**/
public class ListNamespacesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaces")
    public Namespace[] namespaces;
    public ListNamespacesResponse withNamespaces(Namespace[] namespaces) {
        this.namespaces = namespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNamespacesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}