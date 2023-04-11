import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for CreateAppsScriptProject rpc call.
 */
export declare class GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest extends SpeakeasyBase {
    /**
     * The name of the Apps Script project to be created.
     */
    appsScriptProject?: string;
    /**
     * The auth config id necessary to fetch the necessary credentials to create the project for external clients
     */
    authConfigId?: string;
}
