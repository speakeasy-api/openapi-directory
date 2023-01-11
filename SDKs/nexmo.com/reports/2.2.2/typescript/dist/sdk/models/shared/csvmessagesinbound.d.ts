import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
/**
 * Inbound Messages
**/
export declare class CsvMessagesInbound extends SpeakeasyBase {
    accountId?: string;
    currency?: string;
    dateReceived?: Date;
    direction?: DirectionEnum;
    from?: string;
    messageBody?: string;
    messageId?: string;
    provider?: string;
    to?: string;
    totalPrice?: number;
}
