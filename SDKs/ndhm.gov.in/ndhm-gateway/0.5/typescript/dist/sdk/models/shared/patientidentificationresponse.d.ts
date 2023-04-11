import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class PatientIdentificationResponsePatient extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PatientIdentificationResponse extends SpeakeasyBase {
    error?: ErrorT;
    patient?: PatientIdentificationResponsePatient;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
