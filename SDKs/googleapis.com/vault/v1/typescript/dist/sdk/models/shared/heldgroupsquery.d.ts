import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Query options for group holds.
 */
export declare class HeldGroupsQuery extends SpeakeasyBase {
    /**
     * The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    endTime?: string;
    /**
     * The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date.
     */
    startTime?: string;
    /**
     * The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold.
     */
    terms?: string;
}
