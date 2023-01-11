package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientWaitTime
 * Expected wait times for new and established patients for a given health care service
**/
public class PatientWaitTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("established")
    public Double established;
    public PatientWaitTime withEstablished(Double established) {
        this.established = established;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new")
    public Double new_;
    public PatientWaitTime withNew(Double new_) {
        this.new_ = new_;
        return this;
    }
    @JsonProperty("service")
    public PatientWaitTimeServiceEnum service;
    public PatientWaitTime withService(PatientWaitTimeServiceEnum service) {
        this.service = service;
        return this;
    }
}