package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KAnonymityResult
 * Result of the k-anonymity computation.
**/
public class GooglePrivacyDlpV2KAnonymityResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equivalenceClassHistogramBuckets")
    public GooglePrivacyDlpV2KAnonymityHistogramBucket[] equivalenceClassHistogramBuckets;
    public GooglePrivacyDlpV2KAnonymityResult withEquivalenceClassHistogramBuckets(GooglePrivacyDlpV2KAnonymityHistogramBucket[] equivalenceClassHistogramBuckets) {
        this.equivalenceClassHistogramBuckets = equivalenceClassHistogramBuckets;
        return this;
    }
}