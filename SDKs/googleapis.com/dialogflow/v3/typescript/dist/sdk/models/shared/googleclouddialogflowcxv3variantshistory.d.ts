import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3VersionVariants } from "./googleclouddialogflowcxv3versionvariants";
/**
 * The history of variants update.
 */
export declare class GoogleCloudDialogflowCxV3VariantsHistory extends SpeakeasyBase {
    /**
     * Update time of the variants.
     */
    updateTime?: string;
    /**
     * A list of flow version variants.
     */
    versionVariants?: GoogleCloudDialogflowCxV3VersionVariants;
}
