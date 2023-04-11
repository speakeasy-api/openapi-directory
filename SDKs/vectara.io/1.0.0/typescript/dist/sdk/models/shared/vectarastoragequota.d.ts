import { SpeakeasyBase } from "../../../internal/utils";
export declare class VectaraStorageQuota extends SpeakeasyBase {
    /**
     * The number of chars from the document that consumed the storage quota.
     */
    numChars?: string;
    /**
     * The number of chars in the metadata of the document that consumed the
     *
     * @remarks
     * storage quota.
     */
    numMetadataChars?: string;
}
