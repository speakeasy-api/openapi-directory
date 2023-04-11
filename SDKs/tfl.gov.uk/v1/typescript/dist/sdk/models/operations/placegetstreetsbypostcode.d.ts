import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PlaceGetStreetsByPostCodeRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    postcodePathParameter: string;
    postcodeInputPostcode?: string;
    postcodeQueryParameter: string;
}
export declare class PlaceGetStreetsByPostCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    systemObject?: Record<string, any>;
}
