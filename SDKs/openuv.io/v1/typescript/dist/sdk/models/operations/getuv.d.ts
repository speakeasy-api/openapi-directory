import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUvRequest extends SpeakeasyBase {
    /**
     * Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
     */
    alt?: number;
    /**
     * UTC datetime in ISO-8601 format, now by default. Use that parameter to get UV Index Forecast for any point in time.
     */
    dt?: Date;
    /**
     * latitude, from -90.00 to 90.00
     */
    lat: number;
    /**
     * longitude, from -180.00 to 180.00
     */
    lng: number;
    /**
     * Ozone in du (Dobson Units), from 100 to 550du, the latest forecast from OMI dataset is used by default.
     */
    ozone?: number;
    /**
     * This header is used to send data that contains your OpenUV API key
     */
    xAccessToken: string;
}
export declare class GetUvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    uvIndexResult?: shared.UvIndexResult;
}
