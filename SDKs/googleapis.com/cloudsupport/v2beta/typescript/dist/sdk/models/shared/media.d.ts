import { SpeakeasyBase } from "../../../internal/utils";
import { Blobstore2Info } from "./blobstore2info";
import { CompositeMedia } from "./compositemedia";
import { ContentTypeInfo } from "./contenttypeinfo";
import { DiffChecksumsResponse } from "./diffchecksumsresponse";
import { DiffDownloadResponse } from "./diffdownloadresponse";
import { DiffUploadRequest } from "./diffuploadrequest";
import { DiffUploadResponse } from "./diffuploadresponse";
import { DiffVersionResponse } from "./diffversionresponse";
import { DownloadParameters } from "./downloadparameters";
import { ObjectId } from "./objectid";
/**
 * # gdata.* are outside protos with mising documentation
 */
export declare enum MediaReferenceTypeEnum {
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
 * # gdata.* are outside protos with mising documentation
 */
export declare class Media extends SpeakeasyBase {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    algorithm?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    bigstoreObjectRef?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobRef?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobstore2Info?: Blobstore2Info;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    compositeMedia?: CompositeMedia[];
    /**
     * # gdata.* are outside protos with mising documentation
     */
    contentType?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    contentTypeInfo?: ContentTypeInfo;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    cosmoBinaryReference?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    crc32cHash?: number;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffChecksumsResponse?: DiffChecksumsResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffDownloadResponse?: DiffDownloadResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffUploadRequest?: DiffUploadRequest;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffUploadResponse?: DiffUploadResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffVersionResponse?: DiffVersionResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    downloadParameters?: DownloadParameters;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    filename?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    hash?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    hashVerified?: boolean;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    inline?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    isPotentialRetry?: boolean;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    length?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    md5Hash?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    mediaId?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectId?: ObjectId;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    path?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    referenceType?: MediaReferenceTypeEnum;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha1Hash?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha256Hash?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    timestamp?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    token?: string;
}
