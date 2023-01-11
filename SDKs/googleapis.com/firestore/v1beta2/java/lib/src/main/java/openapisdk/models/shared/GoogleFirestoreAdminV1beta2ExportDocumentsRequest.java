package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirestoreAdminV1beta2ExportDocumentsRequest
 * The request for FirestoreAdmin.ExportDocuments.
**/
public class GoogleFirestoreAdminV1beta2ExportDocumentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionIds")
    public String[] collectionIds;
    public GoogleFirestoreAdminV1beta2ExportDocumentsRequest withCollectionIds(String[] collectionIds) {
        this.collectionIds = collectionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputUriPrefix")
    public String outputUriPrefix;
    public GoogleFirestoreAdminV1beta2ExportDocumentsRequest withOutputUriPrefix(String outputUriPrefix) {
        this.outputUriPrefix = outputUriPrefix;
        return this;
    }
}