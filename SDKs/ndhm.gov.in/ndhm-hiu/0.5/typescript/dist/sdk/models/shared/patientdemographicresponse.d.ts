import { SpeakeasyBase } from "../../../internal/utils";
import { Identifier } from "./identifier";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
export declare class PatientDemographicResponse extends SpeakeasyBase {
    address?: PatientAddress;
    gender: PatientGenderEnum;
    /**
     * PHR Identifier of patient at consent manager
     */
    id: string;
    identifiers?: Identifier[];
    name: string;
    yearOfBirth: number;
}
