import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for StartEnvironment.
 */
export declare class StartEnvironmentRequest extends SpeakeasyBase {
    /**
     * The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment.
     */
    accessToken?: string;
    /**
     * Public keys that should be added to the environment before it is started.
     */
    publicKeys?: string[];
}
