package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VaccineStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departmentId")
    public String departmentId;
    public VaccineStatusRequest withDepartmentId(String departmentId) {
        this.departmentId = departmentId;
        return this;
    }
    @JsonProperty("patientId")
    public String patientId;
    public VaccineStatusRequest withPatientId(String patientId) {
        this.patientId = patientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public VaccineStatusRequest withToken(String token) {
        this.token = token;
        return this;
    }
}