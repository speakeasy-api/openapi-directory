import { SpeakeasyBase } from "../../../internal/utils";
import { MessageFeedbackEnumOutcomeEnum } from "./messagefeedbackenumoutcomeenum";
/**
 * Created
 */
export declare class ApiV2010AccountMessageMessageFeedback extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MessageFeedback resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The SID of the Message resource for which the feedback was provided.
     */
    messageSid?: string;
    outcome?: MessageFeedbackEnumOutcomeEnum;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
