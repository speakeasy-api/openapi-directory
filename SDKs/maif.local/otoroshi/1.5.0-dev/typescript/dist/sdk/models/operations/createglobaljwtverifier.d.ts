import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGlobalJwtVerifierSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    globalJwtVerifier?: shared.GlobalJwtVerifier;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
