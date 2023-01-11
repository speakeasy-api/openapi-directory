package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEntityTypesResponse
 * Response message for EntityService.ListEntityTypes
**/
public class ListEntityTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEntityTypesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public EntityType[] types;
    public ListEntityTypesResponse withTypes(EntityType[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsupportedTypeNames")
    public String[] unsupportedTypeNames;
    public ListEntityTypesResponse withUnsupportedTypeNames(String[] unsupportedTypeNames) {
        this.unsupportedTypeNames = unsupportedTypeNames;
        return this;
    }
}