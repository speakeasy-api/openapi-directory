import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientIdentifier extends SpeakeasyBase {
    label?: string;
    system: string;
    /**
     * If `true`, the combination of system and value must be global unique among all patients and coaches in Fitbit Plus.
     */
    unique?: boolean;
    value: string;
}
