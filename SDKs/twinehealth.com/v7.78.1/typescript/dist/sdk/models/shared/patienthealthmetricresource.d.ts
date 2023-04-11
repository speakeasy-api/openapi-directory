import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientHealthMetricResourceAttributesCode extends SpeakeasyBase {
    system: string;
    value: string;
}
export declare enum PatientHealthMetricResourceAttributesTypeEnum {
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
export declare class PatientHealthMetricResourceAttributes extends SpeakeasyBase {
    code?: PatientHealthMetricResourceAttributesCode;
    diastolic?: number;
    occurredAt?: string;
    systolic?: number;
    type?: PatientHealthMetricResourceAttributesTypeEnum;
    unit?: string;
    /**
     * Can be any value (number, boolean, string, object) depending on the metric type. Most values are of type number.
     */
    value?: any;
}
export declare class PatientHealthMetricResourceRelationshipsPatientDataMetaQueryIdentifier extends SpeakeasyBase {
    system: string;
    value: string;
}
/**
 * The query must return one and only one patient.
 */
export declare class PatientHealthMetricResourceRelationshipsPatientDataMetaQuery extends SpeakeasyBase {
    groups?: string[];
    identifier: PatientHealthMetricResourceRelationshipsPatientDataMetaQueryIdentifier;
    organization?: string;
}
/**
 * Allows the specification of a query for a patient rather than providing a patient id directly
 */
export declare class PatientHealthMetricResourceRelationshipsPatientDataMeta extends SpeakeasyBase {
    /**
     * The query must return one and only one patient.
     */
    query: PatientHealthMetricResourceRelationshipsPatientDataMetaQuery;
}
export declare class PatientHealthMetricResourceRelationshipsPatientData extends SpeakeasyBase {
    /**
     * Required if the `meta.query` is not defined.
     */
    id?: string;
    /**
     * Allows the specification of a query for a patient rather than providing a patient id directly
     */
    meta?: PatientHealthMetricResourceRelationshipsPatientDataMeta;
    type?: string;
}
export declare class PatientHealthMetricResourceRelationshipsPatient extends SpeakeasyBase {
    data?: PatientHealthMetricResourceRelationshipsPatientData;
    links?: Record<string, any>;
}
export declare class PatientHealthMetricResourceRelationships extends SpeakeasyBase {
    patient?: PatientHealthMetricResourceRelationshipsPatient;
}
export declare class PatientHealthMetricResource extends SpeakeasyBase {
    attributes?: PatientHealthMetricResourceAttributes;
    id: string;
    relationships?: PatientHealthMetricResourceRelationships;
    type: string;
}
