package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Distribution
 * Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
**/
public class Distribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketCounts")
    public String[] bucketCounts;
    public Distribution withBucketCounts(String[] bucketCounts) {
        this.bucketCounts = bucketCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketOptions")
    public BucketOptions bucketOptions;
    public Distribution withBucketOptions(BucketOptions bucketOptions) {
        this.bucketOptions = bucketOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public Distribution withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exemplars")
    public Exemplar[] exemplars;
    public Distribution withExemplars(Exemplar[] exemplars) {
        this.exemplars = exemplars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mean")
    public Double mean;
    public Distribution withMean(Double mean) {
        this.mean = mean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public Range range;
    public Distribution withRange(Range range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sumOfSquaredDeviation")
    public Double sumOfSquaredDeviation;
    public Distribution withSumOfSquaredDeviation(Double sumOfSquaredDeviation) {
        this.sumOfSquaredDeviation = sumOfSquaredDeviation;
        return this;
    }
}