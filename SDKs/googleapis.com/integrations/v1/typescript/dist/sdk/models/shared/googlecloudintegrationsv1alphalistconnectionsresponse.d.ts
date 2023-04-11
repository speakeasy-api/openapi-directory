import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Connection } from "./googlecloudconnectorsv1connection";
/**
 * Response containing Connections listed by region.
 */
export declare class GoogleCloudIntegrationsV1alphaListConnectionsResponse extends SpeakeasyBase {
    /**
     * Connections.
     */
    connections?: GoogleCloudConnectorsV1Connection[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
}
