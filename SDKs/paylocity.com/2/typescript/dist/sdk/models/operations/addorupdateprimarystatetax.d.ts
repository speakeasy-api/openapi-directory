import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddOrUpdatePrimaryStateTaxSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddOrUpdatePrimaryStateTaxRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
    /**
     * Primary State Tax Model
     */
    stateTax: shared.StateTax;
}
export declare class AddOrUpdatePrimaryStateTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
