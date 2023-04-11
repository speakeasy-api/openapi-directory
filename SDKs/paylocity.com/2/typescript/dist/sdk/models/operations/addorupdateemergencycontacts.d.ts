import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddOrUpdateEmergencyContactsSecurity extends SpeakeasyBase {
    paylocityAuth: string;
}
export declare class AddOrUpdateEmergencyContactsRequest extends SpeakeasyBase {
    /**
     * Company Id
     */
    companyId: string;
    /**
     * Emergency Contact Model
     */
    emergencyContact: shared.EmergencyContact;
    /**
     * Employee Id
     */
    employeeId: string;
}
export declare class AddOrUpdateEmergencyContactsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    errors?: shared.ErrorT[];
}
