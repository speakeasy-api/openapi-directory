import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllEarningsSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetAllEarningsRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class GetAllEarningsResponse extends SpeakeasyBase {
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
