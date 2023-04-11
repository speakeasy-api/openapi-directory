import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SavePatientManagementRequest extends SpeakeasyBase {
    /**
     * patientManagement
     */
    patientManagement?: shared.PatientManagement;
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
export declare class SavePatientManagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
