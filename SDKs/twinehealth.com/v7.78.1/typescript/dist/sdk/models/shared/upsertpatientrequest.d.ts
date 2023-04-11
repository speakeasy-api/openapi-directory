import { SpeakeasyBase } from "../../../internal/utils";
import { PatientResourceInput } from "./patientresource";
/**
 * Identifier to match patient
 */
export declare class UpsertPatientRequestMetaQueryIdentifier extends SpeakeasyBase {
    /**
     * Name of system
     */
    system?: string;
    /**
     * Value in system
     */
    value?: string;
}
export declare class UpsertPatientRequestMetaQuery extends SpeakeasyBase {
    /**
     * Group to create/update patient in.
     */
    groups: string[];
    /**
     * Identifier to match patient
     */
    identifier: UpsertPatientRequestMetaQueryIdentifier;
}
export declare class UpsertPatientRequestMeta extends SpeakeasyBase {
    query: UpsertPatientRequestMetaQuery;
}
export declare class UpsertPatientRequestInput extends SpeakeasyBase {
    data: PatientResourceInput;
    meta: UpsertPatientRequestMeta;
}
