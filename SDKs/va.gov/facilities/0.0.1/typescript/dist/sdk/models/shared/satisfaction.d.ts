import { SpeakeasyBase } from "../../../internal/utils";
import { PatientSatisfaction } from "./patientsatisfaction";
export declare class Satisfaction extends SpeakeasyBase {
    effectiveDate?: Date;
    /**
     * Veteran-reported satisfaction scores for health care services
     */
    health?: PatientSatisfaction;
}
