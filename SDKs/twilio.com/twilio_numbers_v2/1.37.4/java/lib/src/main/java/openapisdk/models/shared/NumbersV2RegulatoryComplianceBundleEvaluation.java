package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class NumbersV2RegulatoryComplianceBundleEvaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public NumbersV2RegulatoryComplianceBundleEvaluation withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundle_sid")
    public String bundleSid;
    public NumbersV2RegulatoryComplianceBundleEvaluation withBundleSid(String bundleSid) {
        this.bundleSid = bundleSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public NumbersV2RegulatoryComplianceBundleEvaluation withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regulation_sid")
    public String regulationSid;
    public NumbersV2RegulatoryComplianceBundleEvaluation withRegulationSid(String regulationSid) {
        this.regulationSid = regulationSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Object[] results;
    public NumbersV2RegulatoryComplianceBundleEvaluation withResults(Object[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public NumbersV2RegulatoryComplianceBundleEvaluation withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EvaluationEnumStatusEnum status;
    public NumbersV2RegulatoryComplianceBundleEvaluation withStatus(EvaluationEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NumbersV2RegulatoryComplianceBundleEvaluation withUrl(String url) {
        this.url = url;
        return this;
    }
}