import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllDirectDepositSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetAllDirectDepositRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class GetAllDirectDepositResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully Retrieved
     */
    directDeposits?: shared.DirectDeposit[];
    /**
     * The employee, or direct deposit does not exist
     */
    errors?: shared.ErrorT[];
}
