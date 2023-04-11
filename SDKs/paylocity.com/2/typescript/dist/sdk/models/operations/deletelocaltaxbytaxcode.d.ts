import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteLocalTaxByTaxCodeSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class DeleteLocalTaxByTaxCodeRequest extends SpeakeasyBase {
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
export declare class DeleteLocalTaxByTaxCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
