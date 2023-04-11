import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPatientManagementRequest extends SpeakeasyBase {
    /**
     * groupId
     */
    groupId: number;
    /**
     * identifierId
     */
    identifierId: number;
    /**
     * userId
     */
    userId: number;
}
export declare class GetPatientManagementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientManagement?: shared.PatientManagement;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
