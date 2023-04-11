import { SpeakeasyBase } from "../../../internal/utils";
import { CommandEnumCommandModeEnum } from "./commandenumcommandmodeenum";
import { CommandEnumDirectionEnum } from "./commandenumdirectionenum";
import { CommandEnumStatusEnum } from "./commandenumstatusenum";
import { CommandEnumTransportEnum } from "./commandenumtransportenum";
/**
 * Created
 */
export declare class WirelessV1Command extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Command resource.
     */
    accountSid?: string;
    /**
     * The message being sent to or from the SIM. For text mode messages, this can be up to 160 characters. For binary mode messages, this is a series of up to 140 bytes of data encoded using base64.
     */
    command?: string;
    commandMode?: CommandEnumCommandModeEnum;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    dateUpdated?: Date;
    /**
     * Whether to request a delivery receipt.
     */
    deliveryReceiptRequested?: boolean;
    direction?: CommandEnumDirectionEnum;
    /**
     * The unique string that we created to identify the Command resource.
     */
    sid?: string;
    /**
     * The SID of the [Sim resource](https://www.twilio.com/docs/wireless/api/sim-resource) that the Command was sent to or from.
     */
    simSid?: string;
    status?: CommandEnumStatusEnum;
    transport?: CommandEnumTransportEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
