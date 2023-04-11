import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayLineFromEmployeeRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The employees' unique identifier. E.g EE001
     */
    employeeId: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
    /**
     * The pay line unique identifier. E.g. PL001
     */
    payLineId: string;
}
export declare class GetPayLineFromEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    /**
     * The pay line object.
     */
    payLine?: shared.PayLine;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
