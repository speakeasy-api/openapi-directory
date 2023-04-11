import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientPlanSummaryResourceAttributesWindowOrder extends SpeakeasyBase {
    actions?: string[];
    type?: string;
}
export declare class PatientPlanSummaryResourceAttributesInput extends SpeakeasyBase {
    critical?: Record<string, any>;
    timeZone?: string;
    windowOrder?: PatientPlanSummaryResourceAttributesWindowOrder[];
}
export declare class PatientPlanSummaryResourceRelationshipsActionsData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class PatientPlanSummaryResourceRelationshipsActionsLinks extends SpeakeasyBase {
    related?: string;
}
export declare class PatientPlanSummaryResourceRelationshipsActions extends SpeakeasyBase {
    data?: PatientPlanSummaryResourceRelationshipsActionsData[];
    links?: PatientPlanSummaryResourceRelationshipsActionsLinks;
}
export declare class PatientPlanSummaryResourceRelationshipsBundlesData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class PatientPlanSummaryResourceRelationshipsBundlesLinks extends SpeakeasyBase {
    related?: string;
}
export declare class PatientPlanSummaryResourceRelationshipsBundles extends SpeakeasyBase {
    data?: PatientPlanSummaryResourceRelationshipsBundlesData[];
    links?: PatientPlanSummaryResourceRelationshipsBundlesLinks;
}
export declare class PatientPlanSummaryResourceRelationshipsCurrentResultsData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class PatientPlanSummaryResourceRelationshipsCurrentResultsLinks extends SpeakeasyBase {
    related?: string;
}
export declare class PatientPlanSummaryResourceRelationshipsCurrentResults extends SpeakeasyBase {
    data?: PatientPlanSummaryResourceRelationshipsCurrentResultsData[];
    links?: PatientPlanSummaryResourceRelationshipsCurrentResultsLinks;
}
export declare class PatientPlanSummaryResourceRelationshipsPatientData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class PatientPlanSummaryResourceRelationshipsPatientLinks extends SpeakeasyBase {
    related?: string;
}
export declare class PatientPlanSummaryResourceRelationshipsPatient extends SpeakeasyBase {
    data?: PatientPlanSummaryResourceRelationshipsPatientData;
    links?: PatientPlanSummaryResourceRelationshipsPatientLinks;
}
export declare class PatientPlanSummaryResourceRelationships extends SpeakeasyBase {
    actions: PatientPlanSummaryResourceRelationshipsActions;
    bundles: PatientPlanSummaryResourceRelationshipsBundles;
    currentResults?: PatientPlanSummaryResourceRelationshipsCurrentResults;
    patient: PatientPlanSummaryResourceRelationshipsPatient;
}
export declare enum PatientPlanSummaryResourceTypeEnum {
    PatientPlanSummary = "patient_plan_summary"
}
export declare class PatientPlanSummaryResourceInput extends SpeakeasyBase {
    attributes?: PatientPlanSummaryResourceAttributesInput;
    id: string;
    relationships?: PatientPlanSummaryResourceRelationships;
    type: PatientPlanSummaryResourceTypeEnum;
}
export declare class PatientPlanSummaryResourceAttributesWindowNotificationTimes extends SpeakeasyBase {
    afternoon?: number;
    evening?: number;
    morning?: number;
    night?: number;
}
export declare class PatientPlanSummaryResourceAttributes extends SpeakeasyBase {
    adherence?: Record<string, any>;
    critical?: Record<string, any>;
    effectiveFrom?: string;
    timeZone?: string;
    windowNotificationTimes?: PatientPlanSummaryResourceAttributesWindowNotificationTimes;
    windowOrder?: PatientPlanSummaryResourceAttributesWindowOrder[];
}
export declare class PatientPlanSummaryResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare class PatientPlanSummaryResource extends SpeakeasyBase {
    attributes?: PatientPlanSummaryResourceAttributes;
    id: string;
    links?: PatientPlanSummaryResourceLinks;
    relationships?: PatientPlanSummaryResourceRelationships;
    type: PatientPlanSummaryResourceTypeEnum;
}
