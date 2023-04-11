import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reputation category this IP reputation represents.
 */
export declare enum IpReputationReputationEnum {
    ReputationCategoryUnspecified = "REPUTATION_CATEGORY_UNSPECIFIED",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Bad = "BAD"
}
/**
 * IP Reputation information for a set of IPs in a specific reputation category.
 */
export declare class IpReputation extends SpeakeasyBase {
    /**
     * Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
     */
    ipCount?: string;
    /**
     * The reputation category this IP reputation represents.
     */
    reputation?: IpReputationReputationEnum;
    /**
     * A sample of IPs in this reputation category.
     */
    sampleIps?: string[];
}
