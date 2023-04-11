import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayCodeRevisionByNumberRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The pay code unique identifier. E.g. BASIC
     */
    payCodeId: string;
    /**
     * The revision number. E.g. 1
     */
    revisionNumber: string;
}
export declare class GetPayCodeRevisionByNumberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The pay code object.
     */
    payCode?: shared.PayCode;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
