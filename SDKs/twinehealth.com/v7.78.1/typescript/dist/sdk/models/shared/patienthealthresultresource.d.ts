import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientHealthResultResourceAttributesAnnotations extends SpeakeasyBase {
    text?: string;
    title?: string;
}
export declare class PatientHealthResultResourceAttributesData extends SpeakeasyBase {
    /**
     * Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number
     */
    value?: any;
}
export declare enum PatientHealthResultResourceAttributesMetricTypeEnum {
    BloodPressureSystolic = "blood_pressure_systolic",
    BloodPressureDiastolic = "blood_pressure_diastolic",
    HemoglobinA1c = "hemoglobin_a1c",
    HdlCholesterol = "hdl_cholesterol",
    LdlCholesterol = "ldl_cholesterol",
    TotalCholesterol = "total_cholesterol",
    Triglycerides = "triglycerides",
    BloodUreaNitrogen = "blood_urea_nitrogen",
    Creatinine = "creatinine",
    Hemoglobin = "hemoglobin",
    Hematocrit = "hematocrit",
    TotalSerumIron = "total_serum_iron",
    ThyroidStimulatingHormone = "thyroid_stimulating_hormone",
    FreeThyroxine = "free_thyroxine",
    FreeTriiodothyronine = "free_triiodothyronine",
    TotalTriiodothyronine = "total_triiodothyronine",
    Cd4CellCount = "cd4_cell_count",
    HivViralLoad = "hiv_viral_load",
    Inr = "inr",
    FreeTestosterone = "free_testosterone",
    TotalTestosterone = "total_testosterone",
    CReactiveProtein = "c_reactive_protein",
    ProstateSpecificAntigen = "prostate_specific_antigen",
    Cotinine = "cotinine",
    CPeptide = "c_peptide",
    BloodPressure = "blood_pressure",
    BloodGlucose = "blood_glucose",
    Weight = "weight",
    HeartRate = "heart_rate",
    BodyFatPercentage = "body_fat_percentage",
    BodyMassIndex = "body_mass_index",
    BodyTemperature = "body_temperature",
    ForcedExpiratoryVolume1 = "forced_expiratory_volume1",
    ForcedVitalCapacity = "forced_vital_capacity",
    LeanBodyMass = "lean_body_mass",
    NauseaLevel = "nausea_level",
    OxygenSaturation = "oxygen_saturation",
    PainLevel = "pain_level",
    PeakExpiratoryFlowRate = "peak_expiratory_flow_rate",
    PeripheralPerfusionIndex = "peripheral_perfusion_index",
    RespiratoryRate = "respiratory_rate",
    InhalerUsage = "inhaler_usage"
}
export declare class PatientHealthResultResourceAttributesSource extends SpeakeasyBase {
    /**
     * Can be any value
     */
    metadata?: any;
    name?: string;
    sourceId?: string;
}
export declare class PatientHealthResultResourceAttributes extends SpeakeasyBase {
    /**
     * Links together results. This should be the same as the thread of _action, if it is defined
     */
    thread?: string;
    aggregation?: string;
    annotations?: PatientHealthResultResourceAttributesAnnotations[];
    channel?: string;
    data?: PatientHealthResultResourceAttributesData;
    externalId?: string;
    metricType?: PatientHealthResultResourceAttributesMetricTypeEnum;
    occurredAt?: string;
    occurredAtTimeZone?: string;
    skipped?: boolean;
    source?: PatientHealthResultResourceAttributesSource;
    /**
     * Type of result. Usually the same as metric_type except for lifestyle actions
     */
    type?: string;
    window?: string;
}
export declare class PatientHealthResultResourceRelationshipsActionData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class PatientHealthResultResourceRelationshipsAction extends SpeakeasyBase {
    data?: PatientHealthResultResourceRelationshipsActionData;
    links?: Record<string, any>;
}
export declare class PatientHealthResultResourceRelationshipsMetricData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class PatientHealthResultResourceRelationshipsMetric extends SpeakeasyBase {
    data?: PatientHealthResultResourceRelationshipsMetricData;
    links?: Record<string, any>;
}
export declare class PatientHealthResultResourceRelationshipsPatientDataMetaQueryIdentifier extends SpeakeasyBase {
    system: string;
    value: string;
}
/**
 * The query must return one and only one patient.
 */
export declare class PatientHealthResultResourceRelationshipsPatientDataMetaQuery extends SpeakeasyBase {
    groups?: string[];
    identifier: PatientHealthResultResourceRelationshipsPatientDataMetaQueryIdentifier;
    organization?: string;
}
/**
 * Allows the specification of a query for a patient rather than providing a patient id directly
 */
export declare class PatientHealthResultResourceRelationshipsPatientDataMeta extends SpeakeasyBase {
    /**
     * The query must return one and only one patient.
     */
    query: PatientHealthResultResourceRelationshipsPatientDataMetaQuery;
}
export declare class PatientHealthResultResourceRelationshipsPatientData extends SpeakeasyBase {
    /**
     * Required if the `meta.query` is not defined.
     */
    id?: string;
    /**
     * Allows the specification of a query for a patient rather than providing a patient id directly
     */
    meta?: PatientHealthResultResourceRelationshipsPatientDataMeta;
    type?: string;
}
export declare class PatientHealthResultResourceRelationshipsPatient extends SpeakeasyBase {
    data?: PatientHealthResultResourceRelationshipsPatientData;
    links?: Record<string, any>;
}
export declare class PatientHealthResultResourceRelationships extends SpeakeasyBase {
    action?: PatientHealthResultResourceRelationshipsAction;
    metric?: PatientHealthResultResourceRelationshipsMetric;
    patient?: PatientHealthResultResourceRelationshipsPatient;
}
export declare class PatientHealthResultResource extends SpeakeasyBase {
    attributes?: PatientHealthResultResourceAttributes;
    id: string;
    relationships?: PatientHealthResultResourceRelationships;
    type: string;
}
