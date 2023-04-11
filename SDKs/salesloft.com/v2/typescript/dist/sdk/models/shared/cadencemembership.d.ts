import { SpeakeasyBase } from "../../../internal/utils";
import { CadenceMembershipCounts } from "./cadencemembershipcounts";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class CadenceMembership extends SpeakeasyBase {
    /**
     * Datetime of when the person was last added to this cadence
     */
    addedAt?: Date;
    cadence?: EmbeddedResource;
    counts?: CadenceMembershipCounts;
    /**
     * Datetime of when the person was first added to this cadence
     */
    createdAt?: Date;
    /**
     * The current state of the person on the cadence. Possible values are:
     *
     * @remarks
     *
     * processing: The person is being processed on a cadence. Cadence-related changes cannot be made at this time
     *
     * staged: The person is waiting for the first step in the cadence to occur
     *
     * active: The cadence has begun processing this person and is still in the process, but idle
     *
     * scheduled: The cadence has begun processing this person and is still in the process, with an activity scheduled to occur
     *
     * completed: The cadence has been completed for this person
     *
     * removed: The person was manually or automatically removed from the cadence
     *
     * removed_no_action: The person was removed from the cadence before any action occurred
     *
     * reassigned: The person's cadence execution was transferred to a different user, ending this user's interaction
     *
     */
    currentState?: string;
    /**
     * Whether the person is currently on the cadence
     */
    currentlyOnCadence?: boolean;
    /**
     * Cadence membership ID
     */
    id?: number;
    latestAction?: EmbeddedResource;
    person?: EmbeddedResource;
    /**
     * Whether the associated person has since been deleted
     */
    personDeleted?: boolean;
    /**
     * Datetime of when the record was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}
