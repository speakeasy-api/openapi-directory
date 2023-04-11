import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for Creating Cloud Function rpc call.
 */
export declare class GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest extends SpeakeasyBase {
    /**
     * The function name of CF to be created
     */
    functionName?: string;
    /**
     * The function region of CF to be created
     */
    functionRegion?: string;
    /**
     * Indicates the id of the GCP project that the function will be created in.
     */
    projectId?: string;
}
