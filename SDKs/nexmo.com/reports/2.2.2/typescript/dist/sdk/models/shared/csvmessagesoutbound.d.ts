import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
/**
 * Outbound Messages
**/
export declare class CsvMessagesOutbound extends SpeakeasyBase {
    accountId?: string;
    clientRef?: string;
    country?: string;
    countryName?: string;
    currency?: string;
    dateFinalized?: Date;
    dateReceived?: Date;
    direction?: DirectionEnum;
    errorCode?: string;
    from?: string;
    latency?: number;
    messageBody?: string;
    messageId?: string;
    provider?: string;
    status?: string;
    to?: string;
    totalPrice?: number;
}
