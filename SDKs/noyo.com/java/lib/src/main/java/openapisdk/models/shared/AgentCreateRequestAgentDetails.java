package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentCreateRequestAgentDetails
 * Details about the agent
**/
public class AgentCreateRequestAgentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public AgentCreateRequestAgentDetails withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public AgentCreateRequestAgentDetails withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_number")
    public String licenseNumber;
    public AgentCreateRequestAgentDetails withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("national_producer_number")
    public String nationalProducerNumber;
    public AgentCreateRequestAgentDetails withNationalProducerNumber(String nationalProducerNumber) {
        this.nationalProducerNumber = nationalProducerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_id_number")
    public String taxIdNumber;
    public AgentCreateRequestAgentDetails withTaxIdNumber(String taxIdNumber) {
        this.taxIdNumber = taxIdNumber;
        return this;
    }
}