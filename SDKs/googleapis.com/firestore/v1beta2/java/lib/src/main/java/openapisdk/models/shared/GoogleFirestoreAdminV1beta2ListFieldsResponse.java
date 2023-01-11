package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2ListFieldsResponse
 * The response for FirestoreAdmin.ListFields.
**/
public class GoogleFirestoreAdminV1beta2ListFieldsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public GoogleFirestoreAdminV1beta2Field[] fields;
    public GoogleFirestoreAdminV1beta2ListFieldsResponse withFields(GoogleFirestoreAdminV1beta2Field[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFirestoreAdminV1beta2ListFieldsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}