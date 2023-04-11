import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchGlobalJwtVerifierSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchGlobalJwtVerifierRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The jwt verifier id
     */
    verifierId: string;
}
export declare class PatchGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
