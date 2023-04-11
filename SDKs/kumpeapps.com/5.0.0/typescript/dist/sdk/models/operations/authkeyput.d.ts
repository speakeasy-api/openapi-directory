import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthkeyPutSecurity extends SpeakeasyBase {
    appKey: string;
}
export declare class AuthkeyPutRequest extends SpeakeasyBase {
    /**
     * auth key to logout
     */
    authKey: string;
}
export declare class AuthkeyPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    inlineResponse202?: shared.InlineResponse202;
}
