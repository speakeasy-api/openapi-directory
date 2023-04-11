import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddOrUpdateAnEmployeeEarningSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddOrUpdateAnEmployeeEarningRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Earning Model
     */
    earning: shared.Earning;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class AddOrUpdateAnEmployeeEarningResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
