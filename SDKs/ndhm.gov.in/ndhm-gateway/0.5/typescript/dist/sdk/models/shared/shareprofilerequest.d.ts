import { SpeakeasyBase } from "../../../internal/utils";
import { Identifier } from "./identifier";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
export declare class ShareProfileRequestPatientUserDemographics extends SpeakeasyBase {
    address?: PatientAddress;
    dayOfBirth?: number;
    gender: PatientGenderEnum;
    healthId: string;
    healthIdNumber: string;
    identifiers?: Identifier[];
    monthOfBirth?: number;
    name: string;
    yearOfBirth: number;
}
export declare class ShareProfileRequestPatient extends SpeakeasyBase {
    /**
     * additional details about HIP retrieved after scanning QR.
     */
    hipCode?: string;
    userDemographics: ShareProfileRequestPatientUserDemographics;
}
export declare class ShareProfileRequest extends SpeakeasyBase {
    patient: ShareProfileRequestPatient;
    /**
     * a nonce, unique for each HTTP request.
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
