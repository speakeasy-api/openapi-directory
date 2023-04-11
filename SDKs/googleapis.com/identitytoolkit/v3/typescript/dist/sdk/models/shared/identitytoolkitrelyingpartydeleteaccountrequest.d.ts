import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to delete account.
 */
export declare class IdentitytoolkitRelyingpartyDeleteAccountRequest extends SpeakeasyBase {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * The GITKit token or STS id token of the authenticated user.
     */
    idToken?: string;
    /**
     * The local ID of the user.
     */
    localId?: string;
}
