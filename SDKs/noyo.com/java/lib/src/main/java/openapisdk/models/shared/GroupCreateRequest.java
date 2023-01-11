package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_details")
    public GroupCreateRequestBusinessDetails businessDetails;
    public GroupCreateRequest withBusinessDetails(GroupCreateRequestBusinessDetails businessDetails) {
        this.businessDetails = businessDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dba_name")
    public String dbaName;
    public GroupCreateRequest withDbaName(String dbaName) {
        this.dbaName = dbaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_ein")
    public String federalEin;
    public GroupCreateRequest withFederalEin(String federalEin) {
        this.federalEin = federalEin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_details")
    public GroupCreateRequestInsuranceDetails insuranceDetails;
    public GroupCreateRequest withInsuranceDetails(GroupCreateRequestInsuranceDetails insuranceDetails) {
        this.insuranceDetails = insuranceDetails;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GroupCreateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_id")
    public String organizationId;
    public GroupCreateRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sic_code")
    public String sicCode;
    public GroupCreateRequest withSicCode(String sicCode) {
        this.sicCode = sicCode;
        return this;
    }
}