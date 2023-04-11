import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApodSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetApodRequest extends SpeakeasyBase {
    /**
     * The date of the APOD image to retrieve
     */
    date?: string;
    /**
     * Retrieve the URL for the high resolution image
     */
    hd?: boolean;
}
export declare class GetApodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getApod200ApplicationJSONAnies?: any[];
}
