import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProtectionRequest extends SpeakeasyBase {
    /**
     * Altitude in meters, from 0 to 10000m, 0m by default. If provided the altitude correction factor will be applied to clear sky sea level UV Index value.
     */
    alt?: number;
    /**
     * UV Index from value for protection datetime lookup. From 0 to 40.
     */
    from: number;
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
     * UV Index to value for protection datetime lookup. From 0 to 40.
     */
    to: number;
    /**
     * This header is used to send data that contains your OpenUV API key
     */
    xAccessToken: string;
}
export declare class GetProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    protectionResult?: shared.ProtectionResult;
}
