import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddLocalTaxSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddLocalTaxRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
    /**
     * LocalTax Model
     */
    localTax: shared.LocalTax;
}
export declare class AddLocalTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
