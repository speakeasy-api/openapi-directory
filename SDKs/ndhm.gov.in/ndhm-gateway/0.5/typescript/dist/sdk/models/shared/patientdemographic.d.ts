import { SpeakeasyBase } from "../../../internal/utils";
import { AuthConfirmIdentifier } from "./authconfirmidentifier";
import { PatientGenderEnum } from "./patientgenderenum";
/**
 * Demographic details are only required for demographic auth at this point. Demographic details must be same as registered
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
