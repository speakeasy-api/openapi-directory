package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyTopicEntry
 * Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
**/
public class PolicyTopicEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidences")
    public PolicyTopicEvidence[] evidences;
    public PolicyTopicEntry withEvidences(PolicyTopicEvidence[] evidences) {
        this.evidences = evidences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helpCenterUrl")
    public String helpCenterUrl;
    public PolicyTopicEntry withHelpCenterUrl(String helpCenterUrl) {
        this.helpCenterUrl = helpCenterUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyTopic")
    public String policyTopic;
    public PolicyTopicEntry withPolicyTopic(String policyTopic) {
        this.policyTopic = policyTopic;
        return this;
    }
}