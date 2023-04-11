import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A lightweight reference to a shared drive.
 */
export declare class DriveReference extends SpeakeasyBase {
    /**
     * The resource name of the shared drive. The format is `COLLECTION_ID/DRIVE_ID`. Clients should not assume a specific collection ID for this resource name.
     */
    name?: string;
    /**
     * The title of the shared drive.
     */
    title?: string;
}
