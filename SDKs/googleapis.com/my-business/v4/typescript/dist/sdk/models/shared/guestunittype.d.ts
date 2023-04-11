import { SpeakeasyBase } from "../../../internal/utils";
import { GuestUnitFeatures } from "./guestunitfeatures";
/**
 * A specific type of unit primarily defined by its features.
 */
export declare class GuestUnitType extends SpeakeasyBase {
    /**
     * Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance.
     */
    codes?: string[];
    /**
     * Features and available amenities in the guest unit.
     */
    features?: GuestUnitFeatures;
    /**
     * Required. Short, English label or name of the GuestUnitType. Target <50 chars.
     */
    label?: string;
}
