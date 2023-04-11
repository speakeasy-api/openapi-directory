import { SpeakeasyBase } from "../../../internal/utils";
import { AuthConfirmIdentifier } from "./authconfirmidentifier";
import { PatientGenderEnum } from "./patientgenderenum";
/**
 * demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR.
 */
export declare class PatientDemographic extends SpeakeasyBase {
    /**
     * date of birth in YYYY-MM-DD format.
     */
    dateOfBirth: string;
    gender: PatientGenderEnum;
    identifier?: AuthConfirmIdentifier;
    name: string;
}
