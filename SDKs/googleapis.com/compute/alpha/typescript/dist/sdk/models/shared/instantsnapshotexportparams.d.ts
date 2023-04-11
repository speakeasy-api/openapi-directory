import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKey } from "./customerencryptionkey";
/**
 * The format of the output file.
 */
export declare enum InstantSnapshotExportParamsOutputTypeEnum {
    Invalid = "INVALID",
    MetadataAndData = "METADATA_AND_DATA",
    MetadataOnly = "METADATA_ONLY"
}
export declare class InstantSnapshotExportParams extends SpeakeasyBase {
    /**
     * An optional base instant snapshot that this resource is compared against. If not specified, all blocks of this resource are exported. The base instant snapshot and this resource must be created from the same disk. The base instant snapshot must be created earlier in time than this resource.
     */
    baseInstantSnapshot?: string;
    /**
     * The name of an existing bucket in Cloud Storage where the changed blocks will be stored. The Google Service Account must have read and write access to this bucket. The bucket has to be in the same region as this resource.
     */
    bucketName?: string;
    encryptionKey?: CustomerEncryptionKey;
    /**
     * Name of the output Bigstore object storing the changed blocks. Object name must be less than 1024 bytes in length.
     */
    objectName?: string;
    /**
     * The format of the output file.
     */
    outputType?: InstantSnapshotExportParamsOutputTypeEnum;
}
