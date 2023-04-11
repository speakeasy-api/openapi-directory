import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
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
    /**
     * Start Date
     */
    startDate: string;
}
export declare class GetEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved
     */
    earning?: shared.Earning;
    /**
     * Internal Server Error
     */
    errors?: shared.ErrorT[];
}
