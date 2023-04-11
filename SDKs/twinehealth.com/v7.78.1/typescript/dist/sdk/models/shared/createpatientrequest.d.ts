import { SpeakeasyBase } from "../../../internal/utils";
import { PatientCreateResourceInput } from "./patientcreateresource";
export declare class CreatePatientRequestMeta extends SpeakeasyBase {
    /**
     * If `true`, patients with any conflicting identifiers (same `system` and `value`) will be ignored.
     *
     * @remarks
     * Useful for gracefully skipping duplicates after errors occur during bulk create.
     *
     */
    ignoreDuplicates?: boolean;
}
export declare class CreatePatientRequestInput extends SpeakeasyBase {
    data: PatientCreateResourceInput;
    meta?: CreatePatientRequestMeta;
}
