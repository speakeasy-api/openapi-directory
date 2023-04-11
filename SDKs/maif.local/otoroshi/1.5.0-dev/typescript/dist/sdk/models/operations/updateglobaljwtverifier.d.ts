import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGlobalJwtVerifierSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateGlobalJwtVerifierRequest extends SpeakeasyBase {
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    /**
     * The jwt verifier id
     */
    verifierId: string;
}
export declare class UpdateGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
