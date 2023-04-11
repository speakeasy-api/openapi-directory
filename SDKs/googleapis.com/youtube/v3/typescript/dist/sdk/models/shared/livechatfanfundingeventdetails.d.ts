import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiveChatFanFundingEventDetails extends SpeakeasyBase {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string;
    /**
     * The amount of the fund.
     */
    amountMicros?: string;
    /**
     * The currency in which the fund was made.
     */
    currency?: string;
    /**
     * The comment added by the user to this fan funding event.
     */
    userComment?: string;
}
