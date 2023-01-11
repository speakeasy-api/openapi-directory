package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaListDocumentsResponse
 * Response message for DocumentService.ListDocuments method.
**/
public class GoogleCloudDiscoveryengineV1alphaListDocumentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GoogleCloudDiscoveryengineV1alphaDocument[] documents;
    public GoogleCloudDiscoveryengineV1alphaListDocumentsResponse withDocuments(GoogleCloudDiscoveryengineV1alphaDocument[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDiscoveryengineV1alphaListDocumentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}