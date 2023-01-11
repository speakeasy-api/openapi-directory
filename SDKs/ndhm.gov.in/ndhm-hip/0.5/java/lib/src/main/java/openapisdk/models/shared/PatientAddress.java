package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public String district;
    public PatientAddress withDistrict(String district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line")
    public String line;
    public PatientAddress withLine(String line) {
        this.line = line;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pincode")
    public String pincode;
    public PatientAddress withPincode(String pincode) {
        this.pincode = pincode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public PatientAddress withState(String state) {
        this.state = state;
        return this;
    }
}