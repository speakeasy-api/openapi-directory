import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ApplicationEndpoint represents a remote application endpoint.
 */
export declare class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint extends SpeakeasyBase {
    /**
     * Required. Hostname or IP address of the remote application endpoint.
     */
    host?: string;
    /**
     * Required. Port of the remote application endpoint.
     */
    port?: number;
}
