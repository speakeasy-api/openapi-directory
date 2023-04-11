import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the service account which can be used to generate access token for authenticating the service call.
 */
export declare class GoogleCloudIntegrationsV1alphaServiceAccountCredentials extends SpeakeasyBase {
    /**
     * A space-delimited list of requested scope permissions.
     */
    scope?: string;
    /**
     * Name of the service account that has the permission to make the request.
     */
    serviceAccount?: string;
}
