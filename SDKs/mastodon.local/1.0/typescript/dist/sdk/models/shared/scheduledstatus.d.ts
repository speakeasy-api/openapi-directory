import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
import { StatusParams } from "./statusparams";
/**
 * Represents a status that will be published at a future scheduled date.
 *
 * @see {@link https://docs.joinmastodon.org/entities/scheduledstatus/}
 */
export declare class ScheduledStatus extends SpeakeasyBase {
    /**
     * ID of the scheduled status in the database. Cast from an integer, but not guaranteed to be a number.
     */
    id: string;
    /**
     * Array of attachements
     */
    mediaAttachments: Attachment[];
    params: StatusParams;
    /**
     * ID of the status in the database. ISO 8601 Datetime.
     */
    scheduledAt: Date;
}
