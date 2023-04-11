import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { ArchiveHistory } from "./archivehistory";
import { PatientIdentifier } from "./patientidentifier";
import { PhoneNumber } from "./phonenumber";
export declare enum PatientCreateResourceAttributesGenderEnum {
    Male = "male",
    Female = "female",
    Other = "other"
}
export declare class PatientCreateResourceAttributesInput extends SpeakeasyBase {
    addresses?: Address[];
    archiveHistory?: ArchiveHistory[];
    birthDate?: Date;
    emailAddress?: string;
    firstName?: string;
    gender?: PatientCreateResourceAttributesGenderEnum;
    identifiers?: PatientIdentifier[];
    lastName?: string;
    /**
     * Coach's note about the patient. Not visible to the patient.
     */
    note?: string;
    phoneNumbers?: PhoneNumber[];
}
export declare class PatientCreateResourceRelationshipsCoachesDataMeta extends SpeakeasyBase {
    primary?: boolean;
}
export declare enum PatientCreateResourceRelationshipsCoachesDataTypeEnum {
    Coach = "coach"
}
export declare class PatientCreateResourceRelationshipsCoachesData extends SpeakeasyBase {
    id: string;
    meta?: PatientCreateResourceRelationshipsCoachesDataMeta;
    type: PatientCreateResourceRelationshipsCoachesDataTypeEnum;
}
export declare class PatientCreateResourceRelationshipsCoachesInput extends SpeakeasyBase {
    data: PatientCreateResourceRelationshipsCoachesData[];
}
/**
 * 1. If the query does not return any groups, a group with the specified name will be created and related to the patient.
 *
 * @remarks
 * 2. If the query returns one group, that group will be related to the patient.
 * 3. If the query returns more than one group, the creation of the patient will fail.
 *
 */
export declare class PatientCreateResourceRelationshipsGroupsDataMetaQuery extends SpeakeasyBase {
    name: string;
    organization: string;
}
/**
 * Allows the specification of a query for a group rather than providing a group id directly
 */
export declare class PatientCreateResourceRelationshipsGroupsDataMeta extends SpeakeasyBase {
    /**
     * 1. If the query does not return any groups, a group with the specified name will be created and related to the patient.
     *
     * @remarks
     * 2. If the query returns one group, that group will be related to the patient.
     * 3. If the query returns more than one group, the creation of the patient will fail.
     *
     */
    query: PatientCreateResourceRelationshipsGroupsDataMetaQuery;
}
export declare enum PatientCreateResourceRelationshipsGroupsDataTypeEnum {
    Group = "group"
}
export declare class PatientCreateResourceRelationshipsGroupsData extends SpeakeasyBase {
    /**
     * Required if the `meta.query` is not defined.
     */
    id?: string;
    /**
     * Allows the specification of a query for a group rather than providing a group id directly
     */
    meta?: PatientCreateResourceRelationshipsGroupsDataMeta;
    type: PatientCreateResourceRelationshipsGroupsDataTypeEnum;
}
export declare class PatientCreateResourceRelationshipsGroups extends SpeakeasyBase {
    data: PatientCreateResourceRelationshipsGroupsData[];
}
export declare class PatientCreateResourceRelationshipsInput extends SpeakeasyBase {
    coaches?: PatientCreateResourceRelationshipsCoachesInput;
    groups: PatientCreateResourceRelationshipsGroups;
}
export declare enum PatientCreateResourceTypeEnum {
    Patient = "patient"
}
/**
 * Note that `data` can either be a single object or an array of objects matching the schema specified here
 *
 * @remarks
 * (bulk create).
 *
 */
export declare class PatientCreateResourceInput extends SpeakeasyBase {
    attributes: PatientCreateResourceAttributesInput;
    id?: string;
    relationships?: PatientCreateResourceRelationshipsInput;
    type: PatientCreateResourceTypeEnum;
}
