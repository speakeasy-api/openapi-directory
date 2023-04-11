import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BaggageTripAndContactSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class BaggageTripAndContactRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Bag tag number, PNR, boarding card or FQTV ID
     */
    searchID: string;
}
export declare class BaggageTripAndContactResponse extends SpeakeasyBase {
    baggageTripAndContact200ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
