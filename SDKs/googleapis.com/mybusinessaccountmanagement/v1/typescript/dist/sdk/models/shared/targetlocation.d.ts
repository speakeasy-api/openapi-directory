import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a target location for a pending invitation.
 */
export declare class TargetLocation extends SpeakeasyBase {
    /**
     * The address of the location to which the user is invited.
     */
    address?: string;
    /**
     * The name of the location to which the user is invited.
     */
    locationName?: string;
}
