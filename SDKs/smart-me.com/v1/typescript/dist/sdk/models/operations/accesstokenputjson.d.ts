import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessTokenPutJsonResponse extends SpeakeasyBase {
    /**
     * OK
     */
    accessTokenPutJSON200ApplicationJSONString?: string;
    /**
     * OK
     */
    accessTokenPutJson200ApplicationXMLString?: string;
    /**
     * OK
     */
    accessTokenPutJSON200TextJSONString?: string;
    /**
     * OK
     */
    accessTokenPutJson200TextXMLString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
