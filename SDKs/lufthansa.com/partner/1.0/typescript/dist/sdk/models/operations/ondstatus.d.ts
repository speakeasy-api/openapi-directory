import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ONDStatusSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class ONDStatusRequest extends SpeakeasyBase {
    /**
     * Mandatory http header:  application/xml or application/json
     */
    accept: string;
    /**
     * Carrier for which the OND will be retrieved (e.g. 'LH')
     */
    catalogues?: string;
    /**
     * Enter if newly added routes should be returned in the response. (Acceptable values are: "", "true", "false")
     */
    newRoutes?: string;
    /**
     * Enter if old (deleted) routes should be returned in the response. (Acceptable values are: "", "true", "false")
     */
    oldRoutes?: string;
}
export declare class ONDStatusResponse extends SpeakeasyBase {
    contentType: string;
    ondStatus200ApplicationJSONString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
