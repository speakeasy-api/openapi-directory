package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiSpec
 * Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
**/
public class ApiSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public ApiSpec withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contents")
    public String contents;
    public ApiSpec withContents(String contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ApiSpec withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiSpec withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public ApiSpec withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public ApiSpec withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ApiSpec withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public ApiSpec withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApiSpec withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreateTime")
    public String revisionCreateTime;
    public ApiSpec withRevisionCreateTime(String revisionCreateTime) {
        this.revisionCreateTime = revisionCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public ApiSpec withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionUpdateTime")
    public String revisionUpdateTime;
    public ApiSpec withRevisionUpdateTime(String revisionUpdateTime) {
        this.revisionUpdateTime = revisionUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeBytes")
    public Integer sizeBytes;
    public ApiSpec withSizeBytes(Integer sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUri")
    public String sourceUri;
    public ApiSpec withSourceUri(String sourceUri) {
        this.sourceUri = sourceUri;
        return this;
    }
}