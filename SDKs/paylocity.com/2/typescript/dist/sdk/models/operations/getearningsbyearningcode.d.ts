import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEarningsByEarningCodeSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetEarningsByEarningCodeRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Earning Code
     */
    earningCode: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class GetEarningsByEarningCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved
     */
    earnings?: shared.Earning[];
    /**
     * Internal Server Error
     */
    errors?: shared.ErrorT[];
}
