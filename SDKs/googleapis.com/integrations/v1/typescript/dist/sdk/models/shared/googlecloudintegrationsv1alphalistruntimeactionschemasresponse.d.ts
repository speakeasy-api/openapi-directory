import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaRuntimeActionSchema } from "./googlecloudintegrationsv1alpharuntimeactionschema";
/**
 * Response for listing RuntimeActionSchemas for a specific Connection.
 */
export declare class GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse extends SpeakeasyBase {
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Runtime action schemas.
     */
    runtimeActionSchemas?: GoogleCloudIntegrationsV1alphaRuntimeActionSchema[];
}
