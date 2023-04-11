import { SpeakeasyBase } from "../../../internal/utils";
import { GdataBlobstore2Info } from "./gdatablobstore2info";
import { GdataCompositeMedia } from "./gdatacompositemedia";
import { GdataContentTypeInfo } from "./gdatacontenttypeinfo";
import { GdataDiffChecksumsResponse } from "./gdatadiffchecksumsresponse";
import { GdataDiffDownloadResponse } from "./gdatadiffdownloadresponse";
import { GdataDiffUploadRequest } from "./gdatadiffuploadrequest";
import { GdataDiffUploadResponse } from "./gdatadiffuploadresponse";
import { GdataDiffVersionResponse } from "./gdatadiffversionresponse";
import { GdataDownloadParameters } from "./gdatadownloadparameters";
import { GdataObjectId } from "./gdataobjectid";
/**
 * Describes what the field reference contains.
 */
export declare enum GdataMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    GetMedia = "GET_MEDIA",
    CompositeMedia = "COMPOSITE_MEDIA",
    BigstoreRef = "BIGSTORE_REF",
    DiffVersionResponse = "DIFF_VERSION_RESPONSE",
    DiffChecksumsResponse = "DIFF_CHECKSUMS_RESPONSE",
    DiffDownloadResponse = "DIFF_DOWNLOAD_RESPONSE",
    DiffUploadRequest = "DIFF_UPLOAD_REQUEST",
    DiffUploadResponse = "DIFF_UPLOAD_RESPONSE",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE",
    ArbitraryBytes = "ARBITRARY_BYTES"
}
/**
 * A reference to data stored on the filesystem, on GFS or in blobstore.
 */
export declare class GdataMedia extends SpeakeasyBase {
    /**
     * Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time.
     */
    algorithm?: string;
    /**
     * Use object_id instead.
     */
    bigstoreObjectRef?: string;
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string;
    /**
     * Information to read/write to blobstore2.
     */
    blobstore2Info?: GdataBlobstore2Info;
    /**
     * A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified.
     */
    compositeMedia?: GdataCompositeMedia[];
    /**
     * MIME type of the data
     */
    contentType?: string;
    /**
     * Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.
     */
    contentTypeInfo?: GdataContentTypeInfo;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string;
    /**
     * For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.
     */
    crc32cHash?: number;
    /**
     * Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
     */
    diffChecksumsResponse?: GdataDiffChecksumsResponse;
    /**
     * Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
     */
    diffDownloadResponse?: GdataDiffDownloadResponse;
    /**
     * A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
     */
    diffUploadRequest?: GdataDiffUploadRequest;
    /**
     * Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
     */
    diffUploadResponse?: GdataDiffUploadResponse;
    /**
     * Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
     */
    diffVersionResponse?: GdataDiffVersionResponse;
    /**
     * Parameters specific to media downloads.
     */
    downloadParameters?: GdataDownloadParameters;
    /**
     * Original file name
     */
    filename?: string;
    /**
     * Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media.
     */
    hash?: string;
    /**
     * For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification.
     */
    hashVerified?: boolean;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string;
    /**
     * |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence.
     */
    isPotentialRetry?: boolean;
    /**
     * Size of the data, in bytes
     */
    length?: string;
    /**
     * Scotty-provided MD5 hash for an upload.
     */
    md5Hash?: string;
    /**
     * Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA.
     */
    mediaId?: string;
    /**
     * This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.
     */
    objectId?: GdataObjectId;
    /**
     * Path to the data, set if reference_type is PATH
     */
    path?: string;
    /**
     * Describes what the field reference contains.
     */
    referenceType?: GdataMediaReferenceTypeEnum;
    /**
     * Scotty-provided SHA1 hash for an upload.
     */
    sha1Hash?: string;
    /**
     * Scotty-provided SHA256 hash for an upload.
     */
    sha256Hash?: string;
    /**
     * Time at which the media data was last updated, in milliseconds since UNIX epoch
     */
    timestamp?: string;
    /**
     * A unique fingerprint/version id for the media data
     */
    token?: string;
}
