import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CacheNonceGetRequest extends SpeakeasyBase {
    /**
     * A one-time use token for retieving items in the users cache
     */
    nonce: string;
}
export declare class CacheNonceGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A cached html subdocument (typically loaded via iframe)
     */
    loginButton?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
}
