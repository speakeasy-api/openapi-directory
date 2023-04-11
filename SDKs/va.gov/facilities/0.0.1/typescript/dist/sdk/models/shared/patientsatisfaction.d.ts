import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Veteran-reported satisfaction scores for health care services
 */
export declare class PatientSatisfaction extends SpeakeasyBase {
    /**
     * % of Veterans who say they usually or always get an appointment when they need it at a primary care location.
     */
    primaryCareRoutine?: number;
    /**
     * % of Veterans who say they usually or always get an appointment when they need care right away at a primary care location.
     */
    primaryCareUrgent?: number;
    /**
     * % of Veterans who say they usually or always get an appointment when they need it at a specialty location.
     */
    specialtyCareRoutine?: number;
    /**
     * % of Veterans who say they usually or always get an appointment when they need care right away at a specialty location.
     */
    specialtyCareUrgent?: number;
}
