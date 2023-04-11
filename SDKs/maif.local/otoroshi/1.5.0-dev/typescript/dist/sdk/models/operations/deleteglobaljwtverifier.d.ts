import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteGlobalJwtVerifierSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteGlobalJwtVerifierRequest extends SpeakeasyBase {
    /**
     * The jwt verifier id
     */
    verifierId: string;
}
export declare class DeleteGlobalJwtVerifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
