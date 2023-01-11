package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Revision
 * The metadata for a revision to a file.
**/
public class Revision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportLinks")
    public java.util.Map<String, String> exportLinks;
    public Revision withExportLinks(java.util.Map<String, String> exportLinks) {
        this.exportLinks = exportLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Revision withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keepForever")
    public Boolean keepForever;
    public Revision withKeepForever(Boolean keepForever) {
        this.keepForever = keepForever;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Revision withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifyingUser")
    public User lastModifyingUser;
    public Revision withLastModifyingUser(User lastModifyingUser) {
        this.lastModifyingUser = lastModifyingUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5Checksum")
    public String md5Checksum;
    public Revision withMd5Checksum(String md5Checksum) {
        this.md5Checksum = md5Checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public Revision withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modifiedTime")
    public OffsetDateTime modifiedTime;
    public Revision withModifiedTime(OffsetDateTime modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalFilename")
    public String originalFilename;
    public Revision withOriginalFilename(String originalFilename) {
        this.originalFilename = originalFilename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishAuto")
    public Boolean publishAuto;
    public Revision withPublishAuto(Boolean publishAuto) {
        this.publishAuto = publishAuto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published")
    public Boolean published;
    public Revision withPublished(Boolean published) {
        this.published = published;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedLink")
    public String publishedLink;
    public Revision withPublishedLink(String publishedLink) {
        this.publishedLink = publishedLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedOutsideDomain")
    public Boolean publishedOutsideDomain;
    public Revision withPublishedOutsideDomain(Boolean publishedOutsideDomain) {
        this.publishedOutsideDomain = publishedOutsideDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public Revision withSize(String size) {
        this.size = size;
        return this;
    }
}