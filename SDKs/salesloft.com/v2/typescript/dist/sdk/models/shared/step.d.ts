import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Step extends SpeakeasyBase {
    cadence?: EmbeddedResource;
    /**
     * Datetime of when the Step was created
     */
    createdAt?: Date;
    /**
     * Day this step is associated with up
     */
    day?: number;
    details?: EmbeddedResource;
    /**
     * Whether this step is currently active
     */
    disabled?: boolean;
    /**
     * Display name of the step
     */
    displayName?: string;
    /**
     * ID of Step
     */
    id?: number;
    /**
     * Whether this step is a multitouch cadence step
     */
    multitouchEnabled?: boolean;
    /**
     * Name of the step
     */
    name?: string;
    /**
     * The number of the step for this day
     */
    stepNumber?: number;
    /**
     * The type of the action scheduled by this step. Valid types are: email, phone, integration, other. New types may be added in the future.
     *
     * @remarks
     *
     */
    type?: string;
    /**
     * Datetime of when the Step was last updated
     */
    updatedAt?: Date;
}
