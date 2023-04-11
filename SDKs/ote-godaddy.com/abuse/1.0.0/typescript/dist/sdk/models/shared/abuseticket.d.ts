import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of abuse being reported
 */
export declare enum AbuseTicketTypeEnum {
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
/**
 * The associated fields returned, given a unique abuse ticket id
 */
export declare class AbuseTicket extends SpeakeasyBase {
    /**
     * Is this abuse ticket closed?
     */
    closed: boolean;
    /**
     * The date the abuse ticket was closed
     */
    closedAt: string;
    /**
     * The date the abuse ticket was created
     */
    createdAt: string;
    /**
     * The domain or IP the suspected abuse was reported against
     */
    domainIp: string;
    /**
     * The shopper id of the person who reported the suspected abuse
     */
    reporter: string;
    /**
     * The single URL or IP the suspected abuse was reported against
     */
    source: string;
    /**
     * The company the suspected abuse is targeting
     */
    target: string;
    /**
     * Abuse ticket ID
     */
    ticketId: string;
    /**
     * The type of abuse being reported
     */
    type: AbuseTicketTypeEnum;
}
