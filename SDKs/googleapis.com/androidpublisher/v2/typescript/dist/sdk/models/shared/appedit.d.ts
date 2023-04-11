import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
 */
export declare class AppEdit extends SpeakeasyBase {
    /**
     * The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch).
     */
    expiryTimeSeconds?: string;
    /**
     * The ID of the edit that can be used in subsequent API calls.
     */
    id?: string;
}
