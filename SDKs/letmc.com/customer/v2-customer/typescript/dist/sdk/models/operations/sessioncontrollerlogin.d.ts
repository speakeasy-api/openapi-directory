import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SessionControllerLoginRequest extends SpeakeasyBase {
    /**
     * The user's password.
     */
    password: string;
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The user's username.
     */
    username: string;
}
export declare class SessionControllerLoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sessionControllerLogin200ApplicationJSONString?: string;
    /**
     * OK
     */
    sessionControllerLogin200ApplicationXMLString?: string;
    /**
     * OK
     */
    sessionControllerLogin200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    sessionControllerLogin200TextJSONString?: string;
}
