import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessTokenPutRawResponse extends SpeakeasyBase {
    /**
     * OK
     */
    accessTokenPutRaw200ApplicationJSONString?: string;
    /**
     * OK
     */
    accessTokenPutRaw200ApplicationXMLString?: string;
    /**
     * OK
     */
    accessTokenPutRaw200TextJSONString?: string;
    /**
     * OK
     */
    accessTokenPutRaw200TextXMLString?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
