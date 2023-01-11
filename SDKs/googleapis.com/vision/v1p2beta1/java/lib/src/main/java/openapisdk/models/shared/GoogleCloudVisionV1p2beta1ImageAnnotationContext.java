package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1ImageAnnotationContext
 * If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
**/
public class GoogleCloudVisionV1p2beta1ImageAnnotationContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageNumber")
    public Integer pageNumber;
    public GoogleCloudVisionV1p2beta1ImageAnnotationContext withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudVisionV1p2beta1ImageAnnotationContext withUri(String uri) {
        this.uri = uri;
        return this;
    }
}