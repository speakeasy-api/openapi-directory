import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An `Award_Recipient` object represents the team and/or person who received an award at an event.
 */
export declare class AwardRecipient extends SpeakeasyBase {
    /**
     * The name of the individual given the award. May be null.
     */
    awardee?: string;
    /**
     * The TBA team key for the team that was given the award. May be null.
     */
    teamKey?: string;
}
