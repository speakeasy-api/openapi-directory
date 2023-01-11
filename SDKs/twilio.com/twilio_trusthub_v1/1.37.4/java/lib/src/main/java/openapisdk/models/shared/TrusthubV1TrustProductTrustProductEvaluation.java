package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrusthubV1TrustProductTrustProductEvaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TrusthubV1TrustProductTrustProductEvaluation withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TrusthubV1TrustProductTrustProductEvaluation withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy_sid")
    public String policySid;
    public TrusthubV1TrustProductTrustProductEvaluation withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Object[] results;
    public TrusthubV1TrustProductTrustProductEvaluation withResults(Object[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TrusthubV1TrustProductTrustProductEvaluation withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TrustProductEvaluationEnumStatusEnum status;
    public TrusthubV1TrustProductTrustProductEvaluation withStatus(TrustProductEvaluationEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trust_product_sid")
    public String trustProductSid;
    public TrusthubV1TrustProductTrustProductEvaluation withTrustProductSid(String trustProductSid) {
        this.trustProductSid = trustProductSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TrusthubV1TrustProductTrustProductEvaluation withUrl(String url) {
        this.url = url;
        return this;
    }
}