import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { SmsStatusEnum } from "./smsstatusenum";
/**
 * Outbound SMS
**/
export declare class JsonSmsOutboundWithBody extends SpeakeasyBase {
    accountId?: string;
    clientRef?: string;
    concatenated?: boolean;
    country?: string;
    countryName?: string;
    currency?: string;
    dateFinalized?: Date;
    dateReceived?: Date;
    direction?: DirectionEnum;
    errorCode?: string;
    errorCodeDescription?: string;
    from?: string;
    latency?: number;
    messageBody?: string;
    messageId?: string;
    network?: string;
    networkName?: string;
    status?: SmsStatusEnum;
    to?: string;
    totalPrice?: number;
}
