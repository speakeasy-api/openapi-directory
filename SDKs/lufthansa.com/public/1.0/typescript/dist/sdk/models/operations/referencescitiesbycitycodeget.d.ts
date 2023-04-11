import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReferencesCitiesByCityCodeGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class ReferencesCitiesByCityCodeGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * 3-letter IATA city code
     */
    cityCode: string;
    /**
     * 2 letter ISO 3166-1 language code
     */
    lang?: string;
    /**
     * Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
     */
    limit?: string;
    /**
     * Number of records skipped. Defaults to 0
     */
    offset?: string;
}
export declare class ReferencesCitiesByCityCodeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesCitiesByCityCodeGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
