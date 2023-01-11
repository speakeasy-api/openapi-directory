package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookAheadUnit")
    public Integer bookAheadUnit;
    public ServiceViewModel withBookAheadUnit(Integer bookAheadUnit) {
        this.bookAheadUnit = bookAheadUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookAheadValue")
    public Integer bookAheadValue;
    public ServiceViewModel withBookAheadValue(Integer bookAheadValue) {
        this.bookAheadValue = bookAheadValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookInAdvance")
    public Integer bookInAdvance;
    public ServiceViewModel withBookInAdvance(Integer bookInAdvance) {
        this.bookInAdvance = bookInAdvance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingInterval")
    public Integer bookingInterval;
    public ServiceViewModel withBookingInterval(Integer bookingInterval) {
        this.bookingInterval = bookingInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingLimit")
    public Integer bookingLimit;
    public ServiceViewModel withBookingLimit(Integer bookingLimit) {
        this.bookingLimit = bookingLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarId")
    public String calendarId;
    public ServiceViewModel withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarResourceGroupId")
    public String calendarResourceGroupId;
    public ServiceViewModel withCalendarResourceGroupId(String calendarResourceGroupId) {
        this.calendarResourceGroupId = calendarResourceGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFeeAmount")
    public Double cancellationFeeAmount;
    public ServiceViewModel withCancellationFeeAmount(Double cancellationFeeAmount) {
        this.cancellationFeeAmount = cancellationFeeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFeeTaxable")
    public Boolean cancellationFeeTaxable;
    public ServiceViewModel withCancellationFeeTaxable(Boolean cancellationFeeTaxable) {
        this.cancellationFeeTaxable = cancellationFeeTaxable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyId")
    public String companyId;
    public ServiceViewModel withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerPadding")
    public Boolean consumerPadding;
    public ServiceViewModel withConsumerPadding(Boolean consumerPadding) {
        this.consumerPadding = consumerPadding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyBookingLimitCount")
    public Integer dailyBookingLimitCount;
    public ServiceViewModel withDailyBookingLimitCount(Integer dailyBookingLimitCount) {
        this.dailyBookingLimitCount = dailyBookingLimitCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyBookingLimitMinutes")
    public Integer dailyBookingLimitMinutes;
    public ServiceViewModel withDailyBookingLimitMinutes(Integer dailyBookingLimitMinutes) {
        this.dailyBookingLimitMinutes = dailyBookingLimitMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultService")
    public Boolean defaultService;
    public ServiceViewModel withDefaultService(Boolean defaultService) {
        this.defaultService = defaultService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServiceViewModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Integer duration;
    public ServiceViewModel withDuration(Integer duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInterval")
    public Integer durationInterval;
    public ServiceViewModel withDurationInterval(Integer durationInterval) {
        this.durationInterval = durationInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationMax")
    public Integer durationMax;
    public ServiceViewModel withDurationMax(Integer durationMax) {
        this.durationMax = durationMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationMin")
    public Integer durationMin;
    public ServiceViewModel withDurationMin(Integer durationMin) {
        this.durationMin = durationMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationSelect")
    public Boolean durationSelect;
    public ServiceViewModel withDurationSelect(Boolean durationSelect) {
        this.durationSelect = durationSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeAmount")
    public Double feeAmount;
    public ServiceViewModel withFeeAmount(Double feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeTaxable")
    public Boolean feeTaxable;
    public ServiceViewModel withFeeTaxable(Boolean feeTaxable) {
        this.feeTaxable = feeTaxable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ServiceViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public ServiceViewModel withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public ServiceViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBookingLimit")
    public Integer maxBookingLimit;
    public ServiceViewModel withMaxBookingLimit(Integer maxBookingLimit) {
        this.maxBookingLimit = maxBookingLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCapacity")
    public Integer maxCapacity;
    public ServiceViewModel withMaxCapacity(Integer maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxGroupSize")
    public Integer maxGroupSize;
    public ServiceViewModel withMaxGroupSize(Integer maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResourceBookingLimit")
    public Integer maxResourceBookingLimit;
    public ServiceViewModel withMaxResourceBookingLimit(Integer maxResourceBookingLimit) {
        this.maxResourceBookingLimit = maxResourceBookingLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaPageUrl")
    public String mediaPageUrl;
    public ServiceViewModel withMediaPageUrl(String mediaPageUrl) {
        this.mediaPageUrl = mediaPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServiceViewModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonRefundable")
    public Boolean nonRefundable;
    public ServiceViewModel withNonRefundable(Boolean nonRefundable) {
        this.nonRefundable = nonRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ServiceViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("padding")
    public Integer padding;
    public ServiceViewModel withPadding(Integer padding) {
        this.padding = padding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roundRobin")
    public Integer roundRobin;
    public ServiceViewModel withRoundRobin(Integer roundRobin) {
        this.roundRobin = roundRobin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceGroupId")
    public Integer serviceGroupId;
    public ServiceViewModel withServiceGroupId(Integer serviceGroupId) {
        this.serviceGroupId = serviceGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceGroupName")
    public String serviceGroupName;
    public ServiceViewModel withServiceGroupName(String serviceGroupName) {
        this.serviceGroupName = serviceGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showOnline")
    public Boolean showOnline;
    public ServiceViewModel withShowOnline(Boolean showOnline) {
        this.showOnline = showOnline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ServiceViewModel withType(String type) {
        this.type = type;
        return this;
    }
}