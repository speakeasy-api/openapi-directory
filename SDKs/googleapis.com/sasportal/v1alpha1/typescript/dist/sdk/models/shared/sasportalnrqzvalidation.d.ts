import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State of the NRQZ validation info.
 */
export declare enum SasPortalNrqzValidationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Final = "FINAL"
}
/**
 * Information about National Radio Quiet Zone validation.
 */
export declare class SasPortalNrqzValidation extends SpeakeasyBase {
    /**
     * Validation case ID.
     */
    caseId?: string;
    /**
     * CPI who signed the validation.
     */
    cpiId?: string;
    /**
     * Device latitude that's associated with the validation.
     */
    latitude?: number;
    /**
     * Device longitude that's associated with the validation.
     */
    longitude?: number;
    /**
     * State of the NRQZ validation info.
     */
    state?: SasPortalNrqzValidationStateEnum;
}
