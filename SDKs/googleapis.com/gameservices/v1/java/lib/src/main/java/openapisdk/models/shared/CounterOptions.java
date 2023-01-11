package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CounterOptions
 * Increment a streamz counter with the specified metric and field names. Metric names should start with a '/', generally be lowercase-only, and end in "_count". Field names should not contain an initial slash. The actual exported metric names will have "/iam/policy" prepended. Field names correspond to IAM request parameters and field values are their respective values. Supported field names: - "authority", which is "[token]" if IAMContext.token is present, otherwise the value of IAMContext.authority_selector if present, and otherwise a representation of IAMContext.principal; or - "iam_principal", a representation of IAMContext.principal even if a token or authority selector is present; or - "" (empty string), resulting in a counter with no fields. Examples: counter { metric: "/debug_access_count" field: "iam_principal" } ==> increment counter /iam/policy/debug_access_count {iam_principal=[value of IAMContext.principal]}
**/
public class CounterOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public CustomField[] customFields;
    public CounterOptions withCustomFields(CustomField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public CounterOptions withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metric")
    public String metric;
    public CounterOptions withMetric(String metric) {
        this.metric = metric;
        return this;
    }
}