import { SpeakeasyBase } from "../../../internal/utils";
import { Identifier } from "./identifier";
import { PatientGenderEnum } from "./patientgenderenum";
export declare class PatientDiscoveryRequestPatient extends SpeakeasyBase {
    gender: PatientGenderEnum;
    /**
     * Identifier of patient at consent manager
     */
    id: string;
    name: string;
    unverifiedIdentifiers?: Identifier[];
    verifiedIdentifiers: Identifier[];
    yearOfBirth: number;
}
export declare class PatientDiscoveryRequest extends SpeakeasyBase {
    patient: PatientDiscoveryRequestPatient;
    /**
     * a nonce, unique for each HTTP request.
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
    /**
     * correlation-Id for patient discovery and subsequent care context linkage
     */
    transactionId: string;
}
