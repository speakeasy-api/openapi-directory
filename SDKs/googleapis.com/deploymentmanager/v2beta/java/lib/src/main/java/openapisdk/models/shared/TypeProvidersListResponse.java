package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TypeProvidersListResponse
 * A response that returns all Type Providers supported by Deployment Manager
**/
public class TypeProvidersListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public TypeProvidersListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeProviders")
    public TypeProvider[] typeProviders;
    public TypeProvidersListResponse withTypeProviders(TypeProvider[] typeProviders) {
        this.typeProviders = typeProviders;
        return this;
    }
}