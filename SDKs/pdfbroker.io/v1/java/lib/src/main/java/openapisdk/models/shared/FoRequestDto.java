package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FoRequestDto
 * The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
**/
public class FoRequestDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FoDocumentBase64String")
    public String foDocumentBase64String;
    public FoRequestDto withFoDocumentBase64String(String foDocumentBase64String) {
        this.foDocumentBase64String = foDocumentBase64String;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metadata")
    public PdfMetadataDto metadata;
    public FoRequestDto withMetadata(PdfMetadataDto metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public java.util.Map<String, String> resources;
    public FoRequestDto withResources(java.util.Map<String, String> resources) {
        this.resources = resources;
        return this;
    }
}