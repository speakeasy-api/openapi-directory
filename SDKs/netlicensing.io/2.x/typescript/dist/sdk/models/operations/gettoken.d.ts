import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTokenSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetTokenRequest extends SpeakeasyBase {
    /**
     * Token number
     */
    tokenNumber: string;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
