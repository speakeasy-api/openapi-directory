package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource
 * The inline source for the input config for ImportDocuments method.
**/
public class GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GoogleCloudDiscoveryengineV1betaDocument[] documents;
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource withDocuments(GoogleCloudDiscoveryengineV1betaDocument[] documents) {
        this.documents = documents;
        return this;
    }
}