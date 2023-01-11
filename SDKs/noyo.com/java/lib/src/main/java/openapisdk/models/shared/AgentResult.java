package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AgentResult {
    @JsonProperty("agency_details")
    public AgencyDetails agencyDetails;
    public AgentResult withAgencyDetails(AgencyDetails agencyDetails) {
        this.agencyDetails = agencyDetails;
        return this;
    }
    @JsonProperty("agent_details")
    public AgentResultAgentDetails agentDetails;
    public AgentResult withAgentDetails(AgentResultAgentDetails agentDetails) {
        this.agentDetails = agentDetails;
        return this;
    }
    @JsonProperty("commission_details")
    public SplitCommissionDetails[] commissionDetails;
    public AgentResult withCommissionDetails(SplitCommissionDetails[] commissionDetails) {
        this.commissionDetails = commissionDetails;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public AgentResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("general_agency_details")
    public GeneralAgencyDetails generalAgencyDetails;
    public AgentResult withGeneralAgencyDetails(GeneralAgencyDetails generalAgencyDetails) {
        this.generalAgencyDetails = generalAgencyDetails;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AgentResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("license_number")
    public String licenseNumber;
    public AgentResult withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public AgentResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("signature_date")
    public LocalDate signatureDate;
    public AgentResult withSignatureDate(LocalDate signatureDate) {
        this.signatureDate = signatureDate;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public AgentResult withVersion(String version) {
        this.version = version;
        return this;
    }
}