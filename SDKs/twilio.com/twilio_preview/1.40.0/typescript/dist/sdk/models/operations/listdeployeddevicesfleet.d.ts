import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeployedDevicesFleetServerList: readonly ["https://preview.twilio.com"];
export declare class ListDeployedDevicesFleetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeployedDevicesFleetRequest extends SpeakeasyBase {
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
export declare class ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta extends SpeakeasyBase {
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
export declare class ListDeployedDevicesFleetListDeployedDevicesFleetResponse extends SpeakeasyBase {
    fleets?: shared.PreviewDeployedDevicesFleet[];
    meta?: ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta;
}
export declare class ListDeployedDevicesFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeployedDevicesFleetResponse?: ListDeployedDevicesFleetListDeployedDevicesFleetResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
