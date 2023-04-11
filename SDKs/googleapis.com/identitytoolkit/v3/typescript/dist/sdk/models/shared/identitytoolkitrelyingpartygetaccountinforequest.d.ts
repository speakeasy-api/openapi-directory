import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to get the account information.
 */
export declare class IdentitytoolkitRelyingpartyGetAccountInfoRequest extends SpeakeasyBase {
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * The list of emails of the users to inquiry.
     */
    email?: string[];
    /**
     * The GITKit token of the authenticated user.
     */
    idToken?: string;
    /**
     * The list of local ID's of the users to inquiry.
     */
    localId?: string[];
    /**
     * Privileged caller can query users by specified phone number.
     */
    phoneNumber?: string[];
}
