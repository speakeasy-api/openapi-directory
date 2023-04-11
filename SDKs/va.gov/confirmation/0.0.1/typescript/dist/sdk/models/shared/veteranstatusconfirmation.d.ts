import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether the system could confirm the Veteran status of an individual based on traits
 *
 * @remarks
 *
 */
export declare enum VeteranStatusConfirmationVeteranStatusEnum {
    Confirmed = "confirmed",
    NotConfirmed = "not confirmed"
}
/**
 * Veteran status confirmation for an individual
 */
export declare class VeteranStatusConfirmation extends SpeakeasyBase {
    /**
     * Whether the system could confirm the Veteran status of an individual based on traits
     *
     * @remarks
     *
     */
    veteranStatus?: VeteranStatusConfirmationVeteranStatusEnum;
}
