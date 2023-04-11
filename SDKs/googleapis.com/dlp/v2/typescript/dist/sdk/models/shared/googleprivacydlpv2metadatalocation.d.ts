import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StorageMetadataLabel } from "./googleprivacydlpv2storagemetadatalabel";
/**
 * Type of metadata containing the finding.
 */
export declare enum GooglePrivacyDlpV2MetadataLocationTypeEnum {
    MetadatatypeUnspecified = "METADATATYPE_UNSPECIFIED",
    StorageMetadata = "STORAGE_METADATA"
}
/**
 * Metadata Location
 */
export declare class GooglePrivacyDlpV2MetadataLocation extends SpeakeasyBase {
    /**
     * Storage metadata label to indicate which metadata entry contains findings.
     */
    storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;
    /**
     * Type of metadata containing the finding.
     */
    type?: GooglePrivacyDlpV2MetadataLocationTypeEnum;
}
