import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Inbound SMS
**/
export declare class JsonSmsInboundWithBody extends SpeakeasyBase {
    accountId?: string;
    country?: string;
    countryName?: string;
    currency?: string;
    dateReceived?: Date;
    direction?: Record<string, any>;
    from?: string;
    messageBody?: string;
    messageId?: string;
    network?: string;
    networkName?: string;
    to?: string;
    totalPrice?: number;
}
