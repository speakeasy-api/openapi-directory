import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllLocalTaxesSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetAllLocalTaxesRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class GetAllLocalTaxesResponse extends SpeakeasyBase {
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
