import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetLocalTaxByTaxCodeRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
    /**
     * Tax Code
     */
    taxCode: string;
}
export declare class GetLocalTaxByTaxCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Internal Server Error
     */
    errors?: shared.ErrorT[];
    /**
     * Successfully retrieved
     */
    localTaxes?: shared.LocalTax[];
}
