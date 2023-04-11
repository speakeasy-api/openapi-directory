import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PlaceGetAtRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    latPathParameter: string;
    /**
     * Automatically added
     */
    lonPathParameter: string;
    latQueryParameter: string;
    locationLat: number;
    locationLon: number;
    lonQueryParameter: string;
    /**
     * The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
     */
    type: string[];
}
export declare class PlaceGetAtResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemObject?: Record<string, any>;
}
