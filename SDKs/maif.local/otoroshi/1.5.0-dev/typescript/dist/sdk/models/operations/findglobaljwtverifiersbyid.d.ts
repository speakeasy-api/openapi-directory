import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindGlobalJwtVerifiersByIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindGlobalJwtVerifiersByIdRequest extends SpeakeasyBase {
    /**
     * The jwt verifier id
     */
    verifierId: string;
}
export declare class FindGlobalJwtVerifiersByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
