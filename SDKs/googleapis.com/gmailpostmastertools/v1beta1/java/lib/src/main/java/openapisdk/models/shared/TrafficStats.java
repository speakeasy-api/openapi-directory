package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficStats
 * Email traffic statistics pertaining to a specific date.
**/
public class TrafficStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryErrors")
    public DeliveryError[] deliveryErrors;
    public TrafficStats withDeliveryErrors(DeliveryError[] deliveryErrors) {
        this.deliveryErrors = deliveryErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dkimSuccessRatio")
    public Double dkimSuccessRatio;
    public TrafficStats withDkimSuccessRatio(Double dkimSuccessRatio) {
        this.dkimSuccessRatio = dkimSuccessRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dmarcSuccessRatio")
    public Double dmarcSuccessRatio;
    public TrafficStats withDmarcSuccessRatio(Double dmarcSuccessRatio) {
        this.dmarcSuccessRatio = dmarcSuccessRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainReputation")
    public TrafficStatsDomainReputationEnum domainReputation;
    public TrafficStats withDomainReputation(TrafficStatsDomainReputationEnum domainReputation) {
        this.domainReputation = domainReputation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundEncryptionRatio")
    public Double inboundEncryptionRatio;
    public TrafficStats withInboundEncryptionRatio(Double inboundEncryptionRatio) {
        this.inboundEncryptionRatio = inboundEncryptionRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipReputations")
    public IpReputation[] ipReputations;
    public TrafficStats withIpReputations(IpReputation[] ipReputations) {
        this.ipReputations = ipReputations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TrafficStats withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outboundEncryptionRatio")
    public Double outboundEncryptionRatio;
    public TrafficStats withOutboundEncryptionRatio(Double outboundEncryptionRatio) {
        this.outboundEncryptionRatio = outboundEncryptionRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spammyFeedbackLoops")
    public FeedbackLoop[] spammyFeedbackLoops;
    public TrafficStats withSpammyFeedbackLoops(FeedbackLoop[] spammyFeedbackLoops) {
        this.spammyFeedbackLoops = spammyFeedbackLoops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spfSuccessRatio")
    public Double spfSuccessRatio;
    public TrafficStats withSpfSuccessRatio(Double spfSuccessRatio) {
        this.spfSuccessRatio = spfSuccessRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userReportedSpamRatio")
    public Double userReportedSpamRatio;
    public TrafficStats withUserReportedSpamRatio(Double userReportedSpamRatio) {
        this.userReportedSpamRatio = userReportedSpamRatio;
        return this;
    }
}