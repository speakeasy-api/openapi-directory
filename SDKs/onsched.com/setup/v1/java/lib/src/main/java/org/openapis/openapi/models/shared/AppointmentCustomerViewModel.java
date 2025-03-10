/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AppointmentCustomerViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointmentId")
    public String appointmentId;

    public AppointmentCustomerViewModel withAppointmentId(String appointmentId) {
        this.appointmentId = appointmentId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;

    public AppointmentCustomerViewModel withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    
    public AppointmentCustomerViewModel(){}
}
