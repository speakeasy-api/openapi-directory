import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEmployeeSummaryByEffectiveDateRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The effective date to be applied. E.g 2016-04-06
     */
    effectiveDate: Date;
    /**
     * The employees' unique identifier. E.g EE001
     */
    employeeId: string;
    /**
     * The employers' unique identifier. E.g ER001
     */
    employerId: string;
}
export declare class GetEmployeeSummaryByEffectiveDateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The employee summary object.
     */
    employeeSummary?: any;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
