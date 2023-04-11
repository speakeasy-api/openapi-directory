import { SpeakeasyBase } from "../../../internal/utils";
import { GdataBlobstore2Info } from "./gdatablobstore2info";
import { GdataObjectId } from "./gdataobjectid";
/**
 * gdata
 */
export declare enum GdataCompositeMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    BigstoreRef = "BIGSTORE_REF",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}
/**
 * gdata
 */
export declare class GdataCompositeMedia extends SpeakeasyBase {
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
    cosmoBinaryReference?: string;
    /**
     * gdata
     */
    crc32cHash?: number;
    /**
     * gdata
     */
    inline?: string;
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
    objectId?: GdataObjectId;
    /**
     * gdata
     */
    path?: string;
    /**
     * gdata
     */
    referenceType?: GdataCompositeMediaReferenceTypeEnum;
    /**
     * gdata
     */
    sha1Hash?: string;
}
