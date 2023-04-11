import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1VersionVariants } from "./googleclouddialogflowcxv3beta1versionvariants";
/**
 * The history of variants update.
 */
export declare class GoogleCloudDialogflowCxV3beta1VariantsHistory extends SpeakeasyBase {
    /**
     * Update time of the variants.
     */
    updateTime?: string;
    /**
     * A list of flow version variants.
     */
    versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants;
}
