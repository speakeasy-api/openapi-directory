package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2ImportDocumentsRequest
 * The request for FirestoreAdmin.ImportDocuments.
**/
public class GoogleFirestoreAdminV1beta2ImportDocumentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionIds")
    public String[] collectionIds;
    public GoogleFirestoreAdminV1beta2ImportDocumentsRequest withCollectionIds(String[] collectionIds) {
        this.collectionIds = collectionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputUriPrefix")
    public String inputUriPrefix;
    public GoogleFirestoreAdminV1beta2ImportDocumentsRequest withInputUriPrefix(String inputUriPrefix) {
        this.inputUriPrefix = inputUriPrefix;
        return this;
    }
}