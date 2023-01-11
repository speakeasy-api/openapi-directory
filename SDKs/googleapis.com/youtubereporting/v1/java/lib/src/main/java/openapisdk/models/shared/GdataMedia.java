package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GdataMedia
 * gdata
**/
public class GdataMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public String algorithm;
    public GdataMedia withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigstoreObjectRef")
    public String bigstoreObjectRef;
    public GdataMedia withBigstoreObjectRef(String bigstoreObjectRef) {
        this.bigstoreObjectRef = bigstoreObjectRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobRef")
    public String blobRef;
    public GdataMedia withBlobRef(String blobRef) {
        this.blobRef = blobRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobstore2Info")
    public GdataBlobstore2Info blobstore2Info;
    public GdataMedia withBlobstore2Info(GdataBlobstore2Info blobstore2Info) {
        this.blobstore2Info = blobstore2Info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compositeMedia")
    public GdataCompositeMedia[] compositeMedia;
    public GdataMedia withCompositeMedia(GdataCompositeMedia[] compositeMedia) {
        this.compositeMedia = compositeMedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public GdataMedia withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentTypeInfo")
    public GdataContentTypeInfo contentTypeInfo;
    public GdataMedia withContentTypeInfo(GdataContentTypeInfo contentTypeInfo) {
        this.contentTypeInfo = contentTypeInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cosmoBinaryReference")
    public String cosmoBinaryReference;
    public GdataMedia withCosmoBinaryReference(String cosmoBinaryReference) {
        this.cosmoBinaryReference = cosmoBinaryReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crc32cHash")
    public Long crc32cHash;
    public GdataMedia withCrc32cHash(Long crc32cHash) {
        this.crc32cHash = crc32cHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffChecksumsResponse")
    public GdataDiffChecksumsResponse diffChecksumsResponse;
    public GdataMedia withDiffChecksumsResponse(GdataDiffChecksumsResponse diffChecksumsResponse) {
        this.diffChecksumsResponse = diffChecksumsResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffDownloadResponse")
    public GdataDiffDownloadResponse diffDownloadResponse;
    public GdataMedia withDiffDownloadResponse(GdataDiffDownloadResponse diffDownloadResponse) {
        this.diffDownloadResponse = diffDownloadResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffUploadRequest")
    public GdataDiffUploadRequest diffUploadRequest;
    public GdataMedia withDiffUploadRequest(GdataDiffUploadRequest diffUploadRequest) {
        this.diffUploadRequest = diffUploadRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffUploadResponse")
    public GdataDiffUploadResponse diffUploadResponse;
    public GdataMedia withDiffUploadResponse(GdataDiffUploadResponse diffUploadResponse) {
        this.diffUploadResponse = diffUploadResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diffVersionResponse")
    public GdataDiffVersionResponse diffVersionResponse;
    public GdataMedia withDiffVersionResponse(GdataDiffVersionResponse diffVersionResponse) {
        this.diffVersionResponse = diffVersionResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadParameters")
    public GdataDownloadParameters downloadParameters;
    public GdataMedia withDownloadParameters(GdataDownloadParameters downloadParameters) {
        this.downloadParameters = downloadParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public GdataMedia withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public GdataMedia withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashVerified")
    public Boolean hashVerified;
    public GdataMedia withHashVerified(Boolean hashVerified) {
        this.hashVerified = hashVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inline")
    public String inline;
    public GdataMedia withInline(String inline) {
        this.inline = inline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPotentialRetry")
    public Boolean isPotentialRetry;
    public GdataMedia withIsPotentialRetry(Boolean isPotentialRetry) {
        this.isPotentialRetry = isPotentialRetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public String length;
    public GdataMedia withLength(String length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5Hash")
    public String md5Hash;
    public GdataMedia withMd5Hash(String md5Hash) {
        this.md5Hash = md5Hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaId")
    public String mediaId;
    public GdataMedia withMediaId(String mediaId) {
        this.mediaId = mediaId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public GdataObjectId objectId;
    public GdataMedia withObjectId(GdataObjectId objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GdataMedia withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referenceType")
    public GdataMediaReferenceTypeEnum referenceType;
    public GdataMedia withReferenceType(GdataMediaReferenceTypeEnum referenceType) {
        this.referenceType = referenceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha1Hash")
    public String sha1Hash;
    public GdataMedia withSha1Hash(String sha1Hash) {
        this.sha1Hash = sha1Hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256Hash")
    public String sha256Hash;
    public GdataMedia withSha256Hash(String sha256Hash) {
        this.sha256Hash = sha256Hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public GdataMedia withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public GdataMedia withToken(String token) {
        this.token = token;
        return this;
    }
}