package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiSpecInput
 * Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
**/
public class ApiSpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public ApiSpecInput withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public ApiSpecInput withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiSpecInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public ApiSpecInput withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApiSpecInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public ApiSpecInput withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApiSpecInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUri")
    public String sourceUri;
    public ApiSpecInput withSourceUri(String sourceUri) {
        this.sourceUri = sourceUri;
        return this;
    }
}