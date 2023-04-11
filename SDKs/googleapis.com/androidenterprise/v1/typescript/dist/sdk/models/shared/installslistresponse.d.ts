import { SpeakeasyBase } from "../../../internal/utils";
import { Install } from "./install";
/**
 * Successful response
 */
export declare class InstallsListResponse extends SpeakeasyBase {
    /**
     * An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app.
     */
    install?: Install[];
}
