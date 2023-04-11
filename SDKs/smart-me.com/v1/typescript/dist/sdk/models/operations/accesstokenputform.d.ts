import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessTokenPutFormResponse extends SpeakeasyBase {
    /**
     * OK
     */
    accessTokenPutForm200ApplicationJSONString?: string;
    /**
     * OK
     */
    accessTokenPutForm200ApplicationXMLString?: string;
    /**
     * OK
     */
    accessTokenPutForm200TextJSONString?: string;
    /**
     * OK
     */
    accessTokenPutForm200TextXMLString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
