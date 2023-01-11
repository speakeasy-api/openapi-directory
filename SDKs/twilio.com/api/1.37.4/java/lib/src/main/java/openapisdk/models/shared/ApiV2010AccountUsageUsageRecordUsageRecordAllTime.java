package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountUsageUsageRecordUsageRecordAllTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_of")
    public String asOf;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withAsOf(String asOf) {
        this.asOf = asOf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public UsageRecordAllTimeEnumCategoryEnum category;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withCategory(UsageRecordAllTimeEnumCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_unit")
    public String countUnit;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withCountUnit(String countUnit) {
        this.countUnit = countUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public LocalDate startDate;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public String usage;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withUsage(String usage) {
        this.usage = usage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_unit")
    public String usageUnit;
    public ApiV2010AccountUsageUsageRecordUsageRecordAllTime withUsageUnit(String usageUnit) {
        this.usageUnit = usageUnit;
        return this;
    }
}