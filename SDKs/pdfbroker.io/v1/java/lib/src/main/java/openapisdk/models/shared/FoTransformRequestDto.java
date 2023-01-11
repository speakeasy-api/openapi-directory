package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FoTransformRequestDto
 * The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
**/
public class FoTransformRequestDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FoDocumentBase64String")
    public String foDocumentBase64String;
    public FoTransformRequestDto withFoDocumentBase64String(String foDocumentBase64String) {
        this.foDocumentBase64String = foDocumentBase64String;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metadata")
    public PdfMetadataDto metadata;
    public FoTransformRequestDto withMetadata(PdfMetadataDto metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public java.util.Map<String, String> resources;
    public FoTransformRequestDto withResources(java.util.Map<String, String> resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XmlDataDocumentBase64String")
    public String xmlDataDocumentBase64String;
    public FoTransformRequestDto withXmlDataDocumentBase64String(String xmlDataDocumentBase64String) {
        this.xmlDataDocumentBase64String = xmlDataDocumentBase64String;
        return this;
    }
}