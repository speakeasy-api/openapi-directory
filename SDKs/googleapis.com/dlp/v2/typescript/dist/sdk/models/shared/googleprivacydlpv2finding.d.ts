import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2Location } from "./googleprivacydlpv2location";
import { GooglePrivacyDlpV2QuoteInfo } from "./googleprivacydlpv2quoteinfo";
/**
 * Confidence of how likely it is that the `info_type` is correct.
 */
export declare enum GooglePrivacyDlpV2FindingLikelihoodEnum {
    LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
    VeryUnlikely = "VERY_UNLIKELY",
    Unlikely = "UNLIKELY",
    Possible = "POSSIBLE",
    Likely = "LIKELY",
    VeryLikely = "VERY_LIKELY"
}
/**
 * Represents a piece of potentially sensitive content.
 */
export declare class GooglePrivacyDlpV2Finding extends SpeakeasyBase {
    /**
     * Timestamp when finding was detected.
     */
    createTime?: string;
    /**
     * The unique finding id.
     */
    findingId?: string;
    /**
     * Type of information detected by the API.
     */
    infoType?: GooglePrivacyDlpV2InfoType;
    /**
     * Time the job started that produced this finding.
     */
    jobCreateTime?: string;
    /**
     * The job that stored the finding.
     */
    jobName?: string;
    /**
     * The labels associated with this `Finding`. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`
     */
    labels?: Record<string, string>;
    /**
     * Confidence of how likely it is that the `info_type` is correct.
     */
    likelihood?: GooglePrivacyDlpV2FindingLikelihoodEnum;
    /**
     * Specifies the location of the finding.
     */
    location?: GooglePrivacyDlpV2Location;
    /**
     * Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings.
     */
    name?: string;
    /**
     * The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if `include_quote` is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted.
     */
    quote?: string;
    /**
     * Message for infoType-dependent details parsed from quote.
     */
    quoteInfo?: GooglePrivacyDlpV2QuoteInfo;
    /**
     * The job that stored the finding.
     */
    resourceName?: string;
    /**
     * Job trigger name, if applicable, for this finding.
     */
    triggerName?: string;
}
