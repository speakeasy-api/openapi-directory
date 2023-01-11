package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BusinessDefaultsInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoUpdateCustomer")
    public Boolean autoUpdateCustomer;
    public BusinessDefaultsInputModel withAutoUpdateCustomer(Boolean autoUpdateCustomer) {
        this.autoUpdateCustomer = autoUpdateCustomer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessNotification")
    public Boolean businessNotification;
    public BusinessDefaultsInputModel withBusinessNotification(Boolean businessNotification) {
        this.businessNotification = businessNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerCity")
    public Boolean customerCity;
    public BusinessDefaultsInputModel withCustomerCity(Boolean customerCity) {
        this.customerCity = customerCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerState")
    public Boolean customerState;
    public BusinessDefaultsInputModel withCustomerState(Boolean customerState) {
        this.customerState = customerState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailInfo")
    public Boolean emailInfo;
    public BusinessDefaultsInputModel withEmailInfo(Boolean emailInfo) {
        this.emailInfo = emailInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableUtcTimezone")
    public Boolean enableUtcTimezone;
    public BusinessDefaultsInputModel withEnableUtcTimezone(Boolean enableUtcTimezone) {
        this.enableUtcTimezone = enableUtcTimezone;
        return this;
    }
}