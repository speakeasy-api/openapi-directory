import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { ArchiveHistory } from "./archivehistory";
import { PatientIdentifier } from "./patientidentifier";
import { PhoneNumber } from "./phonenumber";
export declare enum PatientResourceAttributesGenderEnum {
    Male = "male",
    Female = "female",
    Other = "other"
}
export declare class PatientResourceAttributesInput extends SpeakeasyBase {
    addresses?: Address[];
    archiveHistory?: ArchiveHistory[];
    birthDate?: Date;
    emailAddress?: string;
    firstName?: string;
    gender?: PatientResourceAttributesGenderEnum;
    identifiers?: PatientIdentifier[];
    lastName?: string;
    /**
     * Coach's note about the patient. Not visible to the patient.
     */
    note?: string;
    phoneNumbers?: PhoneNumber[];
}
export declare class PatientResourceRelationshipsCoachesDataMeta extends SpeakeasyBase {
    primary?: boolean;
}
export declare enum PatientResourceRelationshipsCoachesDataTypeEnum {
    Coach = "coach"
}
export declare class PatientResourceRelationshipsCoachesData extends SpeakeasyBase {
    id: string;
    meta?: PatientResourceRelationshipsCoachesDataMeta;
    type: PatientResourceRelationshipsCoachesDataTypeEnum;
}
export declare class PatientResourceRelationshipsCoachesInput extends SpeakeasyBase {
    data: PatientResourceRelationshipsCoachesData[];
}
export declare enum PatientResourceRelationshipsGroupsDataTypeEnum {
    Group = "group"
}
export declare class PatientResourceRelationshipsGroupsData extends SpeakeasyBase {
    id?: string;
    type: PatientResourceRelationshipsGroupsDataTypeEnum;
}
export declare class PatientResourceRelationshipsGroups extends SpeakeasyBase {
    data: PatientResourceRelationshipsGroupsData[];
}
export declare class PatientResourceRelationshipsInput extends SpeakeasyBase {
    coaches?: PatientResourceRelationshipsCoachesInput;
    groups: PatientResourceRelationshipsGroups;
}
export declare enum PatientResourceTypeEnum {
    Patient = "patient"
}
export declare class PatientResourceInput extends SpeakeasyBase {
    attributes: PatientResourceAttributesInput;
    id?: string;
    relationships?: PatientResourceRelationshipsInput;
    type: PatientResourceTypeEnum;
}
/**
 * A patient's motivation statement.
 */
export declare class PatientResourceAttributesStatement extends SpeakeasyBase {
    updatedAt?: string;
    updatedBy?: string;
    value?: string;
}
export declare class PatientResourceAttributes extends SpeakeasyBase {
    addresses?: Address[];
    archiveHistory?: ArchiveHistory[];
    archived?: boolean;
    birthDate?: Date;
    emailAddress?: string;
    enrolledAt?: string;
    firstAccessAt?: string;
    firstName?: string;
    gender?: PatientResourceAttributesGenderEnum;
    identifiers?: PatientIdentifier[];
    invitedAt?: string;
    lastAccessAt?: string;
    lastName?: string;
    /**
     * Coach's note about the patient. Not visible to the patient.
     */
    note?: string;
    phoneNumbers?: PhoneNumber[];
    /**
     * A patient's motivation statement.
     */
    statement?: PatientResourceAttributesStatement;
    updatedAt?: string;
}
export declare class PatientResourceLinks extends SpeakeasyBase {
    self?: string;
    /**
     * A link to the patient record in the Fitbit Plus web application.
     */
    twineWebApp?: string;
}
export declare class PatientResourceRelationshipsCoachesLinks extends SpeakeasyBase {
    related?: string;
}
export declare class PatientResourceRelationshipsCoaches extends SpeakeasyBase {
    data: PatientResourceRelationshipsCoachesData[];
    links?: PatientResourceRelationshipsCoachesLinks;
}
export declare class PatientResourceRelationships extends SpeakeasyBase {
    coaches?: PatientResourceRelationshipsCoaches;
    groups: PatientResourceRelationshipsGroups;
}
export declare class PatientResource extends SpeakeasyBase {
    attributes: PatientResourceAttributes;
    id?: string;
    links?: PatientResourceLinks;
    relationships?: PatientResourceRelationships;
    type: PatientResourceTypeEnum;
}
