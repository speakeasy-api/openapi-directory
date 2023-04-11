import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeployedDevicesDeploymentServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeployedDevicesDeploymentRequest extends SpeakeasyBase {
    fleetSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    deployments?: shared.PreviewDeployedDevicesFleetDeployment[];
    meta?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponseMeta;
}
export declare class ListDeployedDevicesDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeployedDevicesDeploymentResponse?: ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
