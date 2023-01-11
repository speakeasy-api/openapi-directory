package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DockerImage
 * DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
**/
public class DockerImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildTime")
    public String buildTime;
    public DockerImage withBuildTime(String buildTime) {
        this.buildTime = buildTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageSizeBytes")
    public String imageSizeBytes;
    public DockerImage withImageSizeBytes(String imageSizeBytes) {
        this.imageSizeBytes = imageSizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaType")
    public String mediaType;
    public DockerImage withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DockerImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public DockerImage withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public DockerImage withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploadTime")
    public String uploadTime;
    public DockerImage withUploadTime(String uploadTime) {
        this.uploadTime = uploadTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public DockerImage withUri(String uri) {
        this.uri = uri;
        return this;
    }
}