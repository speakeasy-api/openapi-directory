import { SpeakeasyBase } from "../../../internal/utils";
import { AuthConfirmIdentifier } from "./authconfirmidentifier";
import { PatientGenderEnum } from "./patientgenderenum";
/**
 * Demographic details must be same as registered
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
