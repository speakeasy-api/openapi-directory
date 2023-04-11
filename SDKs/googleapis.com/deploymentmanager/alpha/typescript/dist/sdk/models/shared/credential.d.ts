import { SpeakeasyBase } from "../../../internal/utils";
import { BasicAuth } from "./basicauth";
import { ServiceAccount } from "./serviceaccount";
/**
 * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
 */
export declare class Credential extends SpeakeasyBase {
    /**
     * Basic Auth used as a credential.
     */
    basicAuth?: BasicAuth;
    /**
     * Service Account used as a credential.
     */
    serviceAccount?: ServiceAccount;
    /**
     * Specify to use the project default credential, only supported by Deployment.
     */
    useProjectDefault?: boolean;
}
