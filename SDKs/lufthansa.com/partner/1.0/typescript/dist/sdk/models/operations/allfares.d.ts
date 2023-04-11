import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllFaresSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class AllFaresRequest extends SpeakeasyBase {
    /**
     * Mandatory http header:  application/xml or application/json
     */
    accept?: string;
    /**
     * Enter the required cabin class (e.g econonmy, business etc.). (Acceptable values are: "", "economy", "premium economy", "business", "first")
     */
    cabinClass?: string;
    /**
     * Specifies in which catalogue the fares need to be searched (e.g.'4U;OS').
     */
    catalogues: string;
    /**
     * Enter journey destination (e.g 'MAD').
     */
    destination: string;
    /**
     * Mandatory for 4U. Specifies, which fares to be returned, such as basic, smart, best, smartflex, bestflex . (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")
     */
    fareFamily?: string;
    /**
     * Enter journey origin (e.g 'FRA').
     */
    origin: string;
    /**
     * Enter journey return-date (e.g 2016-10-31)'.
     */
    returnDate?: string;
    /**
     * Austrian Airlines only - specify the web tracking id to be used in OS Deep link.
     */
    trackingid?: string;
    /**
     * Enter journey travel-date (e.g 2016-10-20)
     */
    travelDate: string;
    /**
     * Specifies the type and number of travelers (e.g. '(adult=2;child=2;infant=1)') For LH only (adult=1) possible.
     */
    travelers?: string;
}
export declare class AllFaresResponse extends SpeakeasyBase {
    allFares200ApplicationJSONString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
