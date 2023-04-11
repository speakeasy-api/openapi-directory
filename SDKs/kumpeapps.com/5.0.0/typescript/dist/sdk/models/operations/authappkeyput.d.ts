import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthAppkeyPutSecurity extends SpeakeasyBase {
    appKey: string;
}
export declare class AuthAppkeyPutRequest extends SpeakeasyBase {
    /**
     * app key to deactivate
     */
    appKey: string;
}
export declare class AuthAppkeyPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * App key deactivated
     */
    inlineResponse202?: shared.InlineResponse202;
}
