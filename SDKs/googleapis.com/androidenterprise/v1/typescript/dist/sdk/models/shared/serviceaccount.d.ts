import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountKey } from "./serviceaccountkey";
/**
 * A service account identity, including the name and credentials that can be used to authenticate as the service account.
 */
export declare class ServiceAccount extends SpeakeasyBase {
    /**
     * Credentials that can be used to authenticate as a service account.
     */
    key?: ServiceAccountKey;
    /**
     * The account name of the service account, in the form of an email address. Assigned by the server.
     */
    name?: string;
}
