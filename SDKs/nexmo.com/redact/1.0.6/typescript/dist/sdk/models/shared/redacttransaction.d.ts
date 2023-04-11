import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Product name that the ID provided relates to
 */
export declare enum RedactTransactionProductEnum {
    Sms = "sms",
    Voice = "voice",
    NumberInsight = "number-insight",
    Verify = "verify",
    VerifySDK = "verify-sdk",
    Messages = "messages"
}
/**
 * Required if redacting SMS data
 */
export declare enum RedactTransactionTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare class RedactTransaction extends SpeakeasyBase {
    /**
     * The transaction ID to redact
     */
    id: string;
    /**
     * Product name that the ID provided relates to
     */
    product: RedactTransactionProductEnum;
    /**
     * Required if redacting SMS data
     */
    type: RedactTransactionTypeEnum;
}
