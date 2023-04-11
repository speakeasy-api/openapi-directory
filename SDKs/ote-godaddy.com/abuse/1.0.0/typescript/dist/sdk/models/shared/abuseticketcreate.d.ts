import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of abuse being reported.
 */
export declare enum AbuseTicketCreateTypeEnum {
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
 * The endpoint which allows the Reporter to create a new abuse ticket
 */
export declare class AbuseTicketCreate extends SpeakeasyBase {
    /**
     * Additional information that may assist the abuse investigator. ie: server logs or email headers/body for SPAM
     */
    info?: string;
    /**
     * Reporter URL if housing additional information that may assist the abuse investigator
     */
    infoUrl?: string;
    /**
     * Do you believe this is intentional abuse by the domain holder?
     */
    intentional?: boolean;
    /**
     * The Proxy information required to view the abuse being reported. ie: Specific IP used, or country of IP viewing from
     */
    proxy?: string;
    /**
     * The URL or IP where live abuse content is located at. ie: https://www.example.com/bad_stuff/bad.php
     */
    source?: string;
    /**
     * The brand/company the abuse is targeting. ie: brand name/bank name
     */
    target?: string;
    /**
     * The type of abuse being reported.
     */
    type?: AbuseTicketCreateTypeEnum;
}
