package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest
 * A list of requests to annotate files using the BatchAnnotateFiles API.
**/
public class GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public GoogleCloudVisionV1p1beta1AnnotateFileRequest[] requests;
    public GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest withRequests(GoogleCloudVisionV1p1beta1AnnotateFileRequest[] requests) {
        this.requests = requests;
        return this;
    }
}