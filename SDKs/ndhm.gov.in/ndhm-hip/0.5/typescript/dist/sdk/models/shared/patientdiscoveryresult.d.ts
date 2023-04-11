import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { PatientRepresentation } from "./patientrepresentation";
import { RequestReference } from "./requestreference";
export declare class PatientDiscoveryResult extends SpeakeasyBase {
    error?: ErrorT;
    patient?: PatientRepresentation;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
    transactionId: string;
}
