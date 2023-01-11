package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Distribution
 * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
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
    @JsonProperty("explicitBuckets")
    public ExplicitBuckets explicitBuckets;
    public Distribution withExplicitBuckets(ExplicitBuckets explicitBuckets) {
        this.explicitBuckets = explicitBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exponentialBuckets")
    public ExponentialBuckets exponentialBuckets;
    public Distribution withExponentialBuckets(ExponentialBuckets exponentialBuckets) {
        this.exponentialBuckets = exponentialBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linearBuckets")
    public LinearBuckets linearBuckets;
    public Distribution withLinearBuckets(LinearBuckets linearBuckets) {
        this.linearBuckets = linearBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum")
    public Double maximum;
    public Distribution withMaximum(Double maximum) {
        this.maximum = maximum;
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
    @JsonProperty("minimum")
    public Double minimum;
    public Distribution withMinimum(Double minimum) {
        this.minimum = minimum;
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