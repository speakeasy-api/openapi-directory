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
 * A revision of a file.
**/
public class Revision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadUrl")
    public String downloadUrl;
    public Revision withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Revision withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportLinks")
    public java.util.Map<String, String> exportLinks;
    public Revision withExportLinks(java.util.Map<String, String> exportLinks) {
        this.exportLinks = exportLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSize")
    public String fileSize;
    public Revision withFileSize(String fileSize) {
        this.fileSize = fileSize;
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
    @JsonProperty("lastModifyingUserName")
    public String lastModifyingUserName;
    public Revision withLastModifyingUserName(String lastModifyingUserName) {
        this.lastModifyingUserName = lastModifyingUserName;
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
    @JsonProperty("modifiedDate")
    public OffsetDateTime modifiedDate;
    public Revision withModifiedDate(OffsetDateTime modifiedDate) {
        this.modifiedDate = modifiedDate;
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
    @JsonProperty("pinned")
    public Boolean pinned;
    public Revision withPinned(Boolean pinned) {
        this.pinned = pinned;
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
    @JsonProperty("selfLink")
    public String selfLink;
    public Revision withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}