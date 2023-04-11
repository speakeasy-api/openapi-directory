import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2RequestLogging } from "./googlecloudidentitytoolkitadminv2requestlogging";
/**
 * Configuration related to monitoring project activity.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2MonitoringConfig extends SpeakeasyBase {
    /**
     * Configuration for logging requests made to this project to Stackdriver Logging
     */
    requestLogging?: GoogleCloudIdentitytoolkitAdminV2RequestLogging;
}
