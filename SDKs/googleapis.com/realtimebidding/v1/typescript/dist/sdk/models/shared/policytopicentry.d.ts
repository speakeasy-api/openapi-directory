import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTopicEvidence } from "./policytopicevidence";
/**
 * Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
 */
export declare class PolicyTopicEntry extends SpeakeasyBase {
    /**
     * Pieces of evidence associated with this policy topic entry.
     */
    evidences?: PolicyTopicEvidence[];
    /**
     * URL of the help center article describing this policy topic.
     */
    helpCenterUrl?: string;
    /**
     * Whether or not the policy topic is missing a certificate. Some policy topics require a certificate to unblock serving in some regions. For more information about creative certification, refer to: https://support.google.com/authorizedbuyers/answer/7450776
     */
    missingCertificate?: boolean;
    /**
     * Policy topic this entry refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method
     */
    policyTopic?: string;
}
