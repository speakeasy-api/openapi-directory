package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1DeviceAueCountReport
 * Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
**/
public class GoogleChromeManagementV1DeviceAueCountReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aueMonth")
    public GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum aueMonth;
    public GoogleChromeManagementV1DeviceAueCountReport withAueMonth(GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum aueMonth) {
        this.aueMonth = aueMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aueYear")
    public String aueYear;
    public GoogleChromeManagementV1DeviceAueCountReport withAueYear(String aueYear) {
        this.aueYear = aueYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GoogleChromeManagementV1DeviceAueCountReport withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expired")
    public Boolean expired;
    public GoogleChromeManagementV1DeviceAueCountReport withExpired(Boolean expired) {
        this.expired = expired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleChromeManagementV1DeviceAueCountReport withModel(String model) {
        this.model = model;
        return this;
    }
}