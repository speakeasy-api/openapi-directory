import { SpeakeasyBase } from "../../../internal/utils";
import { Blobstore2Info } from "./blobstore2info";
import { ObjectId } from "./objectid";
/**
 * # gdata.* are outside protos with mising documentation
 */
export declare enum CompositeMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    BigstoreRef = "BIGSTORE_REF",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}
/**
 * # gdata.* are outside protos with mising documentation
 */
export declare class CompositeMedia extends SpeakeasyBase {
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
    cosmoBinaryReference?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    crc32cHash?: number;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    inline?: string;
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
    objectId?: ObjectId;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    path?: string;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    referenceType?: CompositeMediaReferenceTypeEnum;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha1Hash?: string;
}
