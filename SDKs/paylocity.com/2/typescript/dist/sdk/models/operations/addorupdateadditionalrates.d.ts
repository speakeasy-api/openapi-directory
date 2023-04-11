import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddOrUpdateAdditionalRatesSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddOrUpdateAdditionalRatesRequest extends SpeakeasyBase {
    /**
     * Additional Rate Model
     */
    additionalRate: shared.AdditionalRate;
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class AddOrUpdateAdditionalRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
