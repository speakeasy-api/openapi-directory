package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2ListIndexesResponse
 * The response for FirestoreAdmin.ListIndexes.
**/
public class GoogleFirestoreAdminV1beta2ListIndexesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indexes")
    public GoogleFirestoreAdminV1beta2Index[] indexes;
    public GoogleFirestoreAdminV1beta2ListIndexesResponse withIndexes(GoogleFirestoreAdminV1beta2Index[] indexes) {
        this.indexes = indexes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFirestoreAdminV1beta2ListIndexesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}