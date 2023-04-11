import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PlaceGetOverlayRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    latPathParameter: string;
    /**
     * Automatically added
     */
    lonPathParameter: string;
    /**
     * The height of the requested overlay.
     */
    height: number;
    latQueryParameter: string;
    locationLat: number;
    locationLon: number;
    lonQueryParameter: string;
    /**
     * The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
     */
    type: string[];
    /**
     * The width of the requested overlay.
     */
    width: number;
    /**
     * The zoom level
     */
    z: number;
}
export declare class PlaceGetOverlayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemObject?: Record<string, any>;
}
