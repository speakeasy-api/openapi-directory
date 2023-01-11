package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrusthubV1CustomerProfileCustomerProfileEvaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_profile_sid")
    public String customerProfileSid;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withCustomerProfileSid(String customerProfileSid) {
        this.customerProfileSid = customerProfileSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy_sid")
    public String policySid;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withPolicySid(String policySid) {
        this.policySid = policySid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Object[] results;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withResults(Object[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sid")
    public String sid;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withSid(String sid) {
        this.sid = sid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CustomerProfileEvaluationEnumStatusEnum status;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withStatus(CustomerProfileEvaluationEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TrusthubV1CustomerProfileCustomerProfileEvaluation withUrl(String url) {
        this.url = url;
        return this;
    }
}