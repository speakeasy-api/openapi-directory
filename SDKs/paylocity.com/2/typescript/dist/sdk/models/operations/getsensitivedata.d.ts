import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSensitiveDataSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class GetSensitiveDataRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class GetSensitiveDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
    /**
     * Successfully Retrieved
     */
    sensitiveData?: shared.SensitiveData[];
}
