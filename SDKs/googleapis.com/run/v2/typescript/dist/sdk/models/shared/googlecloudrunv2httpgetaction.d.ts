import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2HTTPHeader } from "./googlecloudrunv2httpheader";
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export declare class GoogleCloudRunV2HTTPGetAction extends SpeakeasyBase {
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: GoogleCloudRunV2HTTPHeader[];
    /**
     * Path to access on the HTTP server. Defaults to '/'.
     */
    path?: string;
    /**
     * Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.
     */
    port?: number;
}
