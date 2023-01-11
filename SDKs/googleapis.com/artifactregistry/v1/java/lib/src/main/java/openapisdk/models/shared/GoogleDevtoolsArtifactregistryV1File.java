package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleDevtoolsArtifactregistryV1File
 * Files store content that is potentially associated with Packages or Versions.
**/
public class GoogleDevtoolsArtifactregistryV1File {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleDevtoolsArtifactregistryV1File withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashes")
    public Hash[] hashes;
    public GoogleDevtoolsArtifactregistryV1File withHashes(Hash[] hashes) {
        this.hashes = hashes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleDevtoolsArtifactregistryV1File withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public GoogleDevtoolsArtifactregistryV1File withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeBytes")
    public String sizeBytes;
    public GoogleDevtoolsArtifactregistryV1File withSizeBytes(String sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleDevtoolsArtifactregistryV1File withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}