package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource
 * The inline source for the input config for ImportDocuments method.
**/
public class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GoogleCloudDiscoveryengineV1alphaDocument[] documents;
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource withDocuments(GoogleCloudDiscoveryengineV1alphaDocument[] documents) {
        this.documents = documents;
        return this;
    }
}