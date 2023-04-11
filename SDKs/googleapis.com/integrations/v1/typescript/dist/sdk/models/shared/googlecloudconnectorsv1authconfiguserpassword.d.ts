import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * Parameters to support Username and Password Authentication.
 */
export declare class GoogleCloudConnectorsV1AuthConfigUserPassword extends SpeakeasyBase {
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    password?: GoogleCloudConnectorsV1Secret;
    /**
     * Username.
     */
    username?: string;
}
