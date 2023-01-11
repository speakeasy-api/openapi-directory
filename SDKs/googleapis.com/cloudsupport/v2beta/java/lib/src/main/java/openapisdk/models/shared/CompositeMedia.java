package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompositeMedia
 * # gdata.* are outside protos with mising documentation
**/
public class CompositeMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobRef")
    public String blobRef;
    public CompositeMedia withBlobRef(String blobRef) {
        this.blobRef = blobRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobstore2Info")
    public Blobstore2Info blobstore2Info;
    public CompositeMedia withBlobstore2Info(Blobstore2Info blobstore2Info) {
        this.blobstore2Info = blobstore2Info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cosmoBinaryReference")
    public String cosmoBinaryReference;
    public CompositeMedia withCosmoBinaryReference(String cosmoBinaryReference) {
        this.cosmoBinaryReference = cosmoBinaryReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crc32cHash")
    public Long crc32cHash;
    public CompositeMedia withCrc32cHash(Long crc32cHash) {
        this.crc32cHash = crc32cHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline")
    public String inline;
    public CompositeMedia withInline(String inline) {
        this.inline = inline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public String length;
    public CompositeMedia withLength(String length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5Hash")
    public String md5Hash;
    public CompositeMedia withMd5Hash(String md5Hash) {
        this.md5Hash = md5Hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public ObjectId objectId;
    public CompositeMedia withObjectId(ObjectId objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public CompositeMedia withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceType")
    public CompositeMediaReferenceTypeEnum referenceType;
    public CompositeMedia withReferenceType(CompositeMediaReferenceTypeEnum referenceType) {
        this.referenceType = referenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Hash")
    public String sha1Hash;
    public CompositeMedia withSha1Hash(String sha1Hash) {
        this.sha1Hash = sha1Hash;
        return this;
    }
}