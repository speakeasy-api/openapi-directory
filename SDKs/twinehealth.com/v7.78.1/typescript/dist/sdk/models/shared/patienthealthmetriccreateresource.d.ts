import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientHealthMetricCreateResourceAttributesCode extends SpeakeasyBase {
    system: string;
    value: string;
}
export declare enum PatientHealthMetricCreateResourceAttributesTypeEnum {
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
export declare class PatientHealthMetricCreateResourceAttributes extends SpeakeasyBase {
    code?: PatientHealthMetricCreateResourceAttributesCode;
    diastolic?: number;
    occurredAt?: string;
    systolic?: number;
    type?: PatientHealthMetricCreateResourceAttributesTypeEnum;
    unit?: string;
    /**
     * Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number.
     */
    value?: any;
}
export declare class PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQueryIdentifier extends SpeakeasyBase {
    system: string;
    value: string;
}
/**
 * The query must return one and only one patient.
 */
export declare class PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQuery extends SpeakeasyBase {
    groups?: string[];
    identifier: PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQueryIdentifier;
    organization?: string;
}
/**
 * Allows the specification of a query for a patient rather than providing a patient id directly
 */
export declare class PatientHealthMetricCreateResourceRelationshipsPatientDataMeta extends SpeakeasyBase {
    /**
     * The query must return one and only one patient.
     */
    query: PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQuery;
}
export declare class PatientHealthMetricCreateResourceRelationshipsPatientData extends SpeakeasyBase {
    /**
     * Required if the `meta.query` is not defined.
     */
    id?: string;
    /**
     * Allows the specification of a query for a patient rather than providing a patient id directly
     */
    meta?: PatientHealthMetricCreateResourceRelationshipsPatientDataMeta;
    type?: string;
}
export declare class PatientHealthMetricCreateResourceRelationshipsPatient extends SpeakeasyBase {
    data?: PatientHealthMetricCreateResourceRelationshipsPatientData;
    links?: Record<string, any>;
}
export declare class PatientHealthMetricCreateResourceRelationships extends SpeakeasyBase {
    patient?: PatientHealthMetricCreateResourceRelationshipsPatient;
}
/**
 * Note that `data` can either be a single object or an array of objects matching the schema specified here
 *
 * @remarks
 * (bulk create).
 *
 */
export declare class PatientHealthMetricCreateResource extends SpeakeasyBase {
    attributes?: PatientHealthMetricCreateResourceAttributes;
    id: string;
    relationships?: PatientHealthMetricCreateResourceRelationships;
    type: string;
}
