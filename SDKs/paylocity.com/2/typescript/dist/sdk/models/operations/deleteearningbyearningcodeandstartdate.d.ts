import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteEarningByEarningCodeAndStartDateSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class DeleteEarningByEarningCodeAndStartDateRequest extends SpeakeasyBase {
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
export declare class DeleteEarningByEarningCodeAndStartDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
