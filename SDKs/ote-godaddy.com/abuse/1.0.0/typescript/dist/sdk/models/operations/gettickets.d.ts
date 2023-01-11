import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class GetTicketsQueryParams extends SpeakeasyBase {
    closed?: boolean;
    createdEnd?: string;
    createdStart?: string;
    limit?: number;
    offset?: number;
    sourceDomainOrIp?: string;
    target?: string;
    type?: GetTicketsTypeEnum;
}
export declare class GetTicketsRequest extends SpeakeasyBase {
    queryParams: GetTicketsQueryParams;
}
export declare class GetTicketsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
