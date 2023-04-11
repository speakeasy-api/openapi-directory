import { SpeakeasyBase } from "../../../internal/utils";
import { PatientHealthMetricCreateResource } from "./patienthealthmetriccreateresource";
export declare class CreatePatientHealthMetricRequestMeta extends SpeakeasyBase {
    /**
     * If `true`, the patient health metric will be ignored if there is an existing patient health metric for
     *
     * @remarks
     * the same patient, with the same `type` and same `occurred_at`.
     *
     */
    ignoreDuplicates?: boolean;
}
export declare class CreatePatientHealthMetricRequest extends SpeakeasyBase {
    data: PatientHealthMetricCreateResource;
    meta?: CreatePatientHealthMetricRequestMeta;
}
