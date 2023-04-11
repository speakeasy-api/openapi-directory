import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTokenSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTokenRequest extends SpeakeasyBase {
    /**
     * Token number
     */
    tokenNumber: string;
}
export declare class DeleteTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
