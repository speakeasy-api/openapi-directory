package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentEditRequestAgentDetails
 * Details about the agent
**/
public class AgentEditRequestAgentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public AgentEditRequestAgentDetails withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public AgentEditRequestAgentDetails withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_number")
    public String licenseNumber;
    public AgentEditRequestAgentDetails withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_producer_number")
    public String nationalProducerNumber;
    public AgentEditRequestAgentDetails withNationalProducerNumber(String nationalProducerNumber) {
        this.nationalProducerNumber = nationalProducerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_id_number")
    public String taxIdNumber;
    public AgentEditRequestAgentDetails withTaxIdNumber(String taxIdNumber) {
        this.taxIdNumber = taxIdNumber;
        return this;
    }
}