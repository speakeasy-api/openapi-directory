import { SpeakeasyBase } from "../../../internal/utils";
import { CadenceCounts } from "./cadencecounts";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Cadence extends SpeakeasyBase {
    addedStage?: EmbeddedResource;
    /**
     * Datetime of when the cadence was archived, if archived
     */
    archivedAt?: Date;
    bouncedStage?: EmbeddedResource;
    /**
     * ID of the cadence framework used to create steps for the cadence
     */
    cadenceFrameworkId?: number;
    /**
     * The use case of the cadence. Possible values are:
     *
     * @remarks
     *
     * outbound: Denotes an outbound cadence, typically for sales purposes
     *
     * inbound: Denotes an inbound sales cadence
     *
     * event: Denotes a cadence used for an upcoming event
     *
     * other: Denotes a cadence outside of the standard process
     *
     */
    cadenceFunction?: string;
    cadencePriority?: EmbeddedResource;
    counts?: CadenceCounts;
    /**
     * Datetime of when the cadence was created
     */
    createdAt?: Date;
    creator?: EmbeddedResource;
    /**
     * Whether this cadence is in draft mode
     */
    draft?: boolean;
    /**
     * Cadence External ID
     */
    externalIdentifier?: string;
    finishedStage?: EmbeddedResource;
    /**
     * Groups to which this cadence is assigned, if any
     */
    groups?: EmbeddedResource[];
    /**
     * ID of cadence
     */
    id?: number;
    /**
     * Cadence name
     */
    name?: string;
    /**
     * Whether this cadence is configured to include an opt-out link by default
     */
    optOutLinkIncluded?: boolean;
    owner?: EmbeddedResource;
    /**
     * Whether this cadence is configured to automatically remove people who have bounced
     */
    removeBouncesEnabled?: boolean;
    /**
     * Whether this cadence is configured to automatically remove people who have replied
     */
    removeRepliesEnabled?: boolean;
    repliedStage?: EmbeddedResource;
    /**
     * Whether this cadence is visible to team members (shared)
     */
    shared?: boolean;
    /**
     * All tags applied to this cadence
     */
    tags?: string[];
    /**
     * Whether this cadence is a team cadence.  A team cadence is created by an admin and can be run by all users
     */
    teamCadence?: boolean;
    /**
     * Datetime of when the cadence was last updated
     */
    updatedAt?: Date;
}
