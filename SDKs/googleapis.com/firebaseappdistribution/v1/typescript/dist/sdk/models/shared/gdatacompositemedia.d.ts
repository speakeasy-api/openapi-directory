import { SpeakeasyBase } from "../../../internal/utils";
import { GdataBlobstore2Info } from "./gdatablobstore2info";
import { GdataObjectId } from "./gdataobjectid";
/**
 * Describes what the field reference contains.
 */
export declare enum GdataCompositeMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    BigstoreRef = "BIGSTORE_REF",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}
/**
 * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
 */
export declare class GdataCompositeMedia extends SpeakeasyBase {
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string;
    /**
     * Information to read/write to blobstore2.
     */
    blobstore2Info?: GdataBlobstore2Info;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string;
    /**
     * crc32.c hash for the payload.
     */
    crc32cHash?: number;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string;
    /**
     * Size of the data, in bytes
     */
    length?: string;
    /**
     * MD5 hash for the payload.
     */
    md5Hash?: string;
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
    referenceType?: GdataCompositeMediaReferenceTypeEnum;
    /**
     * SHA-1 hash for the payload.
     */
    sha1Hash?: string;
}
