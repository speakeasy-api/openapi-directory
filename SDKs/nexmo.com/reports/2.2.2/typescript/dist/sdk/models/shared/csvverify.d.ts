import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Verify
**/
export declare class CsvVerify extends SpeakeasyBase {
    accountId?: string;
    country?: string;
    countryName?: string;
    currency?: string;
    dateFinalized?: Date;
    dateReceived?: Date;
    estimatedPrice?: string;
    firstEventDate?: Date;
    from?: string;
    lastEventDate?: Date;
    locale?: string;
    network?: string;
    networkName?: string;
    numberType?: string;
    price?: number;
    pricingModel?: string;
    requestId?: string;
    smsEventCount?: number;
    to?: string;
    ttsEventCount?: number;
    verifyStatus?: string;
}
