import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddOrUpdateSensitiveDataSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddOrUpdateSensitiveDataRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
    /**
     * Sensitive Data Model
     */
    sensitiveData: shared.SensitiveData;
}
export declare class AddOrUpdateSensitiveDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
