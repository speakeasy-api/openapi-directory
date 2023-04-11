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
 * gdata
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
 * gdata
 */
export declare class GdataMedia extends SpeakeasyBase {
    /**
     * gdata
     */
    algorithm?: string;
    /**
     * gdata
     */
    bigstoreObjectRef?: string;
    /**
     * gdata
     */
    blobRef?: string;
    /**
     * gdata
     */
    blobstore2Info?: GdataBlobstore2Info;
    /**
     * gdata
     */
    compositeMedia?: GdataCompositeMedia[];
    /**
     * gdata
     */
    contentType?: string;
    /**
     * gdata
     */
    contentTypeInfo?: GdataContentTypeInfo;
    /**
     * gdata
     */
    cosmoBinaryReference?: string;
    /**
     * gdata
     */
    crc32cHash?: number;
    /**
     * gdata
     */
    diffChecksumsResponse?: GdataDiffChecksumsResponse;
    /**
     * gdata
     */
    diffDownloadResponse?: GdataDiffDownloadResponse;
    /**
     * gdata
     */
    diffUploadRequest?: GdataDiffUploadRequest;
    /**
     * gdata
     */
    diffUploadResponse?: GdataDiffUploadResponse;
    /**
     * gdata
     */
    diffVersionResponse?: GdataDiffVersionResponse;
    /**
     * gdata
     */
    downloadParameters?: GdataDownloadParameters;
    /**
     * gdata
     */
    filename?: string;
    /**
     * gdata
     */
    hash?: string;
    /**
     * gdata
     */
    hashVerified?: boolean;
    /**
     * gdata
     */
    inline?: string;
    /**
     * gdata
     */
    isPotentialRetry?: boolean;
    /**
     * gdata
     */
    length?: string;
    /**
     * gdata
     */
    md5Hash?: string;
    /**
     * gdata
     */
    mediaId?: string;
    /**
     * gdata
     */
    objectId?: GdataObjectId;
    /**
     * gdata
     */
    path?: string;
    /**
     * gdata
     */
    referenceType?: GdataMediaReferenceTypeEnum;
    /**
     * gdata
     */
    sha1Hash?: string;
    /**
     * gdata
     */
    sha256Hash?: string;
    /**
     * gdata
     */
    timestamp?: string;
    /**
     * gdata
     */
    token?: string;
}
