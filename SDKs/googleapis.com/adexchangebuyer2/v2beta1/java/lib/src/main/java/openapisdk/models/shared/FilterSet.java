package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilterSet
 * A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".
**/
public class FilterSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absoluteDateRange")
    public AbsoluteDateRange absoluteDateRange;
    public FilterSet withAbsoluteDateRange(AbsoluteDateRange absoluteDateRange) {
        this.absoluteDateRange = absoluteDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakdownDimensions")
    public FilterSetBreakdownDimensionsEnum[] breakdownDimensions;
    public FilterSet withBreakdownDimensions(FilterSetBreakdownDimensionsEnum[] breakdownDimensions) {
        this.breakdownDimensions = breakdownDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public FilterSet withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealId")
    public String dealId;
    public FilterSet withDealId(String dealId) {
        this.dealId = dealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public FilterSetEnvironmentEnum environment;
    public FilterSet withEnvironment(FilterSetEnvironmentEnum environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public FilterSetFormatEnum format;
    public FilterSet withFormat(FilterSetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formats")
    public FilterSetFormatsEnum[] formats;
    public FilterSet withFormats(FilterSetFormatsEnum[] formats) {
        this.formats = formats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FilterSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platforms")
    public FilterSetPlatformsEnum[] platforms;
    public FilterSet withPlatforms(FilterSetPlatformsEnum[] platforms) {
        this.platforms = platforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherIdentifiers")
    public String[] publisherIdentifiers;
    public FilterSet withPublisherIdentifiers(String[] publisherIdentifiers) {
        this.publisherIdentifiers = publisherIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("realtimeTimeRange")
    public RealtimeTimeRange realtimeTimeRange;
    public FilterSet withRealtimeTimeRange(RealtimeTimeRange realtimeTimeRange) {
        this.realtimeTimeRange = realtimeTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeDateRange")
    public RelativeDateRange relativeDateRange;
    public FilterSet withRelativeDateRange(RelativeDateRange relativeDateRange) {
        this.relativeDateRange = relativeDateRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerNetworkIds")
    public Integer[] sellerNetworkIds;
    public FilterSet withSellerNetworkIds(Integer[] sellerNetworkIds) {
        this.sellerNetworkIds = sellerNetworkIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeriesGranularity")
    public FilterSetTimeSeriesGranularityEnum timeSeriesGranularity;
    public FilterSet withTimeSeriesGranularity(FilterSetTimeSeriesGranularityEnum timeSeriesGranularity) {
        this.timeSeriesGranularity = timeSeriesGranularity;
        return this;
    }
}