import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of abuse.
 */
export declare enum GetTicketsTypeEnum {
    ARecord = "A_RECORD",
    ChildAbuse = "CHILD_ABUSE",
    Content = "CONTENT",
    FraudWire = "FRAUD_WIRE",
    IpBlock = "IP_BLOCK",
    Malware = "MALWARE",
    NetworkAbuse = "NETWORK_ABUSE",
    Phishing = "PHISHING",
    Spam = "SPAM"
}
export declare class GetTicketsRequest extends SpeakeasyBase {
    /**
     * Is this abuse ticket closed?
     */
    closed?: boolean;
    /**
     * The latest abuse ticket creation date to pull abuse tickets for
     */
    createdEnd?: string;
    /**
     * The earliest abuse ticket creation date to pull abuse tickets for
     */
    createdStart?: string;
    /**
     * Number of abuse ticket numbers to return.
     */
    limit?: number;
    /**
     * The earliest result set record number to pull abuse tickets for
     */
    offset?: number;
    /**
     * The domain name or ip address the abuse originated from
     */
    sourceDomainOrIp?: string;
    /**
     * The brand/company the abuse is targeting. ie: brand name/bank name
     */
    target?: string;
    /**
     * The type of abuse.
     */
    type?: GetTicketsTypeEnum;
}
export declare class GetTicketsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
