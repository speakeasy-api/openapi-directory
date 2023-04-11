import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SessionControllerGetSessionInfoRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class SessionControllerGetSessionInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sessionControllerGetSessionInfo200ApplicationJSONString?: string;
    /**
     * OK
     */
    sessionControllerGetSessionInfo200ApplicationXMLString?: string;
    /**
     * OK
     */
    sessionControllerGetSessionInfo200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    sessionControllerGetSessionInfo200TextJSONString?: string;
}
