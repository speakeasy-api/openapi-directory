import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetstationsdataSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
export declare class GetstationsdataRequest extends SpeakeasyBase {
    /**
     * Id of the device you want to retrieve information of
     */
    deviceId?: string;
    /**
     * Whether to include the user's favorite Weather Stations in addition to the user's own Weather Stations
     */
    getFavorites?: boolean;
}
export declare class GetstationsdataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naStationDataResponse?: shared.NAStationDataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
