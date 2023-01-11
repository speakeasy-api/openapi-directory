import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { PatientRepresentation } from "./patientrepresentation";
import { RequestReference } from "./requestreference";
export declare class PatientDiscoveryResult extends SpeakeasyBase {
    error?: ErrorT;
    patient?: PatientRepresentation;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
    transactionId: string;
}
