package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataCompositeMedia
 * gdata
**/
public class GdataCompositeMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobRef")
    public String blobRef;
    public GdataCompositeMedia withBlobRef(String blobRef) {
        this.blobRef = blobRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobstore2Info")
    public GdataBlobstore2Info blobstore2Info;
    public GdataCompositeMedia withBlobstore2Info(GdataBlobstore2Info blobstore2Info) {
        this.blobstore2Info = blobstore2Info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cosmoBinaryReference")
    public String cosmoBinaryReference;
    public GdataCompositeMedia withCosmoBinaryReference(String cosmoBinaryReference) {
        this.cosmoBinaryReference = cosmoBinaryReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crc32cHash")
    public Long crc32cHash;
    public GdataCompositeMedia withCrc32cHash(Long crc32cHash) {
        this.crc32cHash = crc32cHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline")
    public String inline;
    public GdataCompositeMedia withInline(String inline) {
        this.inline = inline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public String length;
    public GdataCompositeMedia withLength(String length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5Hash")
    public String md5Hash;
    public GdataCompositeMedia withMd5Hash(String md5Hash) {
        this.md5Hash = md5Hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public GdataObjectId objectId;
    public GdataCompositeMedia withObjectId(GdataObjectId objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GdataCompositeMedia withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceType")
    public GdataCompositeMediaReferenceTypeEnum referenceType;
    public GdataCompositeMedia withReferenceType(GdataCompositeMediaReferenceTypeEnum referenceType) {
        this.referenceType = referenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Hash")
    public String sha1Hash;
    public GdataCompositeMedia withSha1Hash(String sha1Hash) {
        this.sha1Hash = sha1Hash;
        return this;
    }
}