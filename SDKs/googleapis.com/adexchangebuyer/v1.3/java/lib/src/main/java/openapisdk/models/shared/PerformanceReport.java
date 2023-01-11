package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PerformanceReport
 * The configuration data for an Ad Exchange performance report list.
**/
public class PerformanceReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidRate")
    public Double bidRate;
    public PerformanceReport withBidRate(Double bidRate) {
        this.bidRate = bidRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidRequestRate")
    public Double bidRequestRate;
    public PerformanceReport withBidRequestRate(Double bidRequestRate) {
        this.bidRequestRate = bidRequestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutStatusRate")
    public Object[] calloutStatusRate;
    public PerformanceReport withCalloutStatusRate(Object[] calloutStatusRate) {
        this.calloutStatusRate = calloutStatusRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cookieMatcherStatusRate")
    public Object[] cookieMatcherStatusRate;
    public PerformanceReport withCookieMatcherStatusRate(Object[] cookieMatcherStatusRate) {
        this.cookieMatcherStatusRate = cookieMatcherStatusRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeStatusRate")
    public Object[] creativeStatusRate;
    public PerformanceReport withCreativeStatusRate(Object[] creativeStatusRate) {
        this.creativeStatusRate = creativeStatusRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteredBidRate")
    public Double filteredBidRate;
    public PerformanceReport withFilteredBidRate(Double filteredBidRate) {
        this.filteredBidRate = filteredBidRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostedMatchStatusRate")
    public Object[] hostedMatchStatusRate;
    public PerformanceReport withHostedMatchStatusRate(Object[] hostedMatchStatusRate) {
        this.hostedMatchStatusRate = hostedMatchStatusRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryMatchRate")
    public Double inventoryMatchRate;
    public PerformanceReport withInventoryMatchRate(Double inventoryMatchRate) {
        this.inventoryMatchRate = inventoryMatchRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PerformanceReport withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency50thPercentile")
    public Double latency50thPercentile;
    public PerformanceReport withLatency50thPercentile(Double latency50thPercentile) {
        this.latency50thPercentile = latency50thPercentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency85thPercentile")
    public Double latency85thPercentile;
    public PerformanceReport withLatency85thPercentile(Double latency85thPercentile) {
        this.latency85thPercentile = latency85thPercentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latency95thPercentile")
    public Double latency95thPercentile;
    public PerformanceReport withLatency95thPercentile(Double latency95thPercentile) {
        this.latency95thPercentile = latency95thPercentile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noQuotaInRegion")
    public Double noQuotaInRegion;
    public PerformanceReport withNoQuotaInRegion(Double noQuotaInRegion) {
        this.noQuotaInRegion = noQuotaInRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outOfQuota")
    public Double outOfQuota;
    public PerformanceReport withOutOfQuota(Double outOfQuota) {
        this.outOfQuota = outOfQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelMatchRequests")
    public Double pixelMatchRequests;
    public PerformanceReport withPixelMatchRequests(Double pixelMatchRequests) {
        this.pixelMatchRequests = pixelMatchRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pixelMatchResponses")
    public Double pixelMatchResponses;
    public PerformanceReport withPixelMatchResponses(Double pixelMatchResponses) {
        this.pixelMatchResponses = pixelMatchResponses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaConfiguredLimit")
    public Double quotaConfiguredLimit;
    public PerformanceReport withQuotaConfiguredLimit(Double quotaConfiguredLimit) {
        this.quotaConfiguredLimit = quotaConfiguredLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaThrottledLimit")
    public Double quotaThrottledLimit;
    public PerformanceReport withQuotaThrottledLimit(Double quotaThrottledLimit) {
        this.quotaThrottledLimit = quotaThrottledLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public PerformanceReport withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successfulRequestRate")
    public Double successfulRequestRate;
    public PerformanceReport withSuccessfulRequestRate(Double successfulRequestRate) {
        this.successfulRequestRate = successfulRequestRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public PerformanceReport withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unsuccessfulRequestRate")
    public Double unsuccessfulRequestRate;
    public PerformanceReport withUnsuccessfulRequestRate(Double unsuccessfulRequestRate) {
        this.unsuccessfulRequestRate = unsuccessfulRequestRate;
        return this;
    }
}