/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;

public class ApiV2010AccountUsageUsageRecordUsageRecordYearly {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    
    /**
     * The API version used to create the resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_version")
    public String apiVersion;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All timestamps are in GMT
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as_of")
    public String asOf;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withAsOf(String asOf) {
        this.asOf = asOf;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public UsageRecordYearlyEnumCategoryEnum category;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withCategory(UsageRecordYearlyEnumCategoryEnum category) {
        this.category = category;
        return this;
    }
    
    /**
     * The number of usage events, such as the number of calls.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withCount(String count) {
        this.count = count;
        return this;
    }
    
    /**
     * The units in which `count` is measured, such as `calls` for calls or `messages` for SMS.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count_unit")
    public String countUnit;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withCountUnit(String countUnit) {
        this.countUnit = countUnit;
        return this;
    }
    
    /**
     * A plain-language description of the usage category.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * The last date for which usage is included in the UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("end_date")
    public LocalDate endDate;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    
    /**
     * The total price of the usage in the currency specified in `price_unit` and associated with the account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withPrice(Double price) {
        this.price = price;
        return this;
    }
    
    /**
     * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`, and `jpy`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    
    /**
     * The first date for which usage is included in this UsageRecord. The date is specified in GMT and formatted as `YYYY-MM-DD`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("start_date")
    public LocalDate startDate;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    
    /**
     * A list of related resources identified by their URIs. For more information, see [List Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subresource_uris")
    public java.util.Map<String, Object> subresourceUris;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withSubresourceUris(java.util.Map<String, Object> subresourceUris) {
        this.subresourceUris = subresourceUris;
        return this;
    }
    
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withUri(String uri) {
        this.uri = uri;
        return this;
    }
    
    /**
     * The amount used to bill usage and measured in units described in `usage_unit`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public String usage;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withUsage(String usage) {
        this.usage = usage;
        return this;
    }
    
    /**
     * The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_unit")
    public String usageUnit;
    public ApiV2010AccountUsageUsageRecordUsageRecordYearly withUsageUnit(String usageUnit) {
        this.usageUnit = usageUnit;
        return this;
    }
    
}
