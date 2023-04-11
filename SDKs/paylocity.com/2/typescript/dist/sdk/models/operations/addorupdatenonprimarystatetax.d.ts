import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddOrUpdateNonPrimaryStateTaxSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddOrUpdateNonPrimaryStateTaxRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
    /**
     * Non-Primary State Tax Model
     */
    nonPrimaryStateTax: shared.NonPrimaryStateTax;
}
export declare class AddOrUpdateNonPrimaryStateTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
