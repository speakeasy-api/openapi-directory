package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AgentCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agency_details")
    public AgencyDetails agencyDetails;
    public AgentCreateRequest withAgencyDetails(AgencyDetails agencyDetails) {
        this.agencyDetails = agencyDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agent_details")
    public AgentCreateRequestAgentDetails agentDetails;
    public AgentCreateRequest withAgentDetails(AgentCreateRequestAgentDetails agentDetails) {
        this.agentDetails = agentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commission_details")
    public SplitCommissionDetails[] commissionDetails;
    public AgentCreateRequest withCommissionDetails(SplitCommissionDetails[] commissionDetails) {
        this.commissionDetails = commissionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("general_agency_details")
    public GeneralAgencyDetails generalAgencyDetails;
    public AgentCreateRequest withGeneralAgencyDetails(GeneralAgencyDetails generalAgencyDetails) {
        this.generalAgencyDetails = generalAgencyDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_number")
    public String licenseNumber;
    public AgentCreateRequest withLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signature_date")
    public LocalDate signatureDate;
    public AgentCreateRequest withSignatureDate(LocalDate signatureDate) {
        this.signatureDate = signatureDate;
        return this;
    }
}