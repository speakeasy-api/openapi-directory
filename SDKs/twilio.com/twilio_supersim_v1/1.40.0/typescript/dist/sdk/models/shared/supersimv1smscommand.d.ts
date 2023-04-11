import { SpeakeasyBase } from "../../../internal/utils";
import { SmsCommandEnumDirectionEnum } from "./smscommandenumdirectionenum";
import { SmsCommandEnumStatusEnum } from "./smscommandenumstatusenum";
/**
 * Created
 */
export declare class SupersimV1SmsCommand extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SMS Command resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    direction?: SmsCommandEnumDirectionEnum;
    /**
     * The message body of the SMS Command sent to or from the SIM. For text mode messages, this can be up to 160 characters.
     */
    payload?: string;
    /**
     * The unique string that we created to identify the SMS Command resource.
     */
    sid?: string;
    /**
     * The SID of the [SIM](https://www.twilio.com/docs/iot/supersim/api/sim-resource) that this SMS Command was sent to or from.
     */
    simSid?: string;
    status?: SmsCommandEnumStatusEnum;
    /**
     * The absolute URL of the SMS Command resource.
     */
    url?: string;
}
