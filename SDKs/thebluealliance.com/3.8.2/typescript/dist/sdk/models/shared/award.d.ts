import { SpeakeasyBase } from "../../../internal/utils";
import { AwardRecipient } from "./awardrecipient";
export declare class Award extends SpeakeasyBase {
    /**
     * Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6
     */
    awardType: number;
    /**
     * The event_key of the event the award was won at.
     */
    eventKey: string;
    /**
     * The name of the award as provided by FIRST. May vary for the same award type.
     */
    name: string;
    /**
     * A list of recipients of the award at the event. May have either a team_key or an awardee, both, or neither (in the case the award wasn't awarded at the event).
     */
    recipientList: AwardRecipient[];
    /**
     * The year this award was won.
     */
    year: number;
}
