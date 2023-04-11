import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2GcsSources } from "./googleclouddialogflowv2gcssources";
/**
 * Represents the configuration of importing a set of conversation files in Google Cloud Storage.
 */
export declare class GoogleCloudDialogflowV2InputConfig extends SpeakeasyBase {
    /**
     * Google Cloud Storage location for the inputs.
     */
    gcsSource?: GoogleCloudDialogflowV2GcsSources;
}
