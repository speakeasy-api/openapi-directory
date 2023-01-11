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
 * Object
 * An object.
**/
public class Object {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acl")
    public ObjectAccessControl[] acl;
    public Object withAcl(ObjectAccessControl[] acl) {
        this.acl = acl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public Object withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheControl")
    public String cacheControl;
    public Object withCacheControl(String cacheControl) {
        this.cacheControl = cacheControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentCount")
    public Integer componentCount;
    public Object withComponentCount(Integer componentCount) {
        this.componentCount = componentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDisposition")
    public String contentDisposition;
    public Object withContentDisposition(String contentDisposition) {
        this.contentDisposition = contentDisposition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentEncoding")
    public String contentEncoding;
    public Object withContentEncoding(String contentEncoding) {
        this.contentEncoding = contentEncoding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLanguage")
    public String contentLanguage;
    public Object withContentLanguage(String contentLanguage) {
        this.contentLanguage = contentLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public Object withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crc32c")
    public String crc32c;
    public Object withCrc32c(String crc32c) {
        this.crc32c = crc32c;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Object withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public Object withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Object withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Object withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5Hash")
    public String md5Hash;
    public Object withMd5Hash(String md5Hash) {
        this.md5Hash = md5Hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaLink")
    public String mediaLink;
    public Object withMediaLink(String mediaLink) {
        this.mediaLink = mediaLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public Object withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metageneration")
    public String metageneration;
    public Object withMetageneration(String metageneration) {
        this.metageneration = metageneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Object withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public ObjectOwner owner;
    public Object withOwner(ObjectOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Object withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public String size;
    public Object withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageClass")
    public String storageClass;
    public Object withStorageClass(String storageClass) {
        this.storageClass = storageClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeDeleted")
    public OffsetDateTime timeDeleted;
    public Object withTimeDeleted(OffsetDateTime timeDeleted) {
        this.timeDeleted = timeDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated")
    public OffsetDateTime updated;
    public Object withUpdated(OffsetDateTime updated) {
        this.updated = updated;
        return this;
    }
}