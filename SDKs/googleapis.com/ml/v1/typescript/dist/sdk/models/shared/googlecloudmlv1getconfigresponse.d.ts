import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Config } from "./googlecloudmlv1config";
/**
 * Returns service account information associated with a project.
 */
export declare class GoogleCloudMlV1GetConfigResponse extends SpeakeasyBase {
    config?: GoogleCloudMlV1Config;
    /**
     * The service account Cloud ML uses to access resources in the project.
     */
    serviceAccount?: string;
    /**
     * The project number for `service_account`.
     */
    serviceAccountProject?: string;
}
