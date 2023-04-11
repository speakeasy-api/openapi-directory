import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FaresSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class FaresRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Include fares for these carriers e.g. ('4U;LH')
     */
    carriers: string;
    /**
     * Search fares from these carriers' catalogues - currently active for Germanwings only  (4U)
     */
    catalogues: string;
    /**
     * Fares family: basic,smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
     */
    fareTypes?: string;
    /**
     * Journey details  e.g. (origin=TXL;destination=CGN;travel-date=2016-12-15;return-date=2016-12-20;cabin=Economy)
     */
    segments: string;
    /**
     * Type and number of travelers e.g. (adult=1;child=1;infant=1)
     */
    travelers?: string;
}
export declare class FaresResponse extends SpeakeasyBase {
    contentType: string;
    fares200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
