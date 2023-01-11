package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_details")
    public GroupResultBusinessDetails businessDetails;
    public GroupResult withBusinessDetails(GroupResultBusinessDetails businessDetails) {
        this.businessDetails = businessDetails;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public GroupResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dba_name")
    public String dbaName;
    public GroupResult withDbaName(String dbaName) {
        this.dbaName = dbaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_ein")
    public String federalEin;
    public GroupResult withFederalEin(String federalEin) {
        this.federalEin = federalEin;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GroupResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_details")
    public GroupResultInsuranceDetails insuranceDetails;
    public GroupResult withInsuranceDetails(GroupResultInsuranceDetails insuranceDetails) {
        this.insuranceDetails = insuranceDetails;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public GroupResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GroupResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("organization_id")
    public String organizationId;
    public GroupResult withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sic_code")
    public String sicCode;
    public GroupResult withSicCode(String sicCode) {
        this.sicCode = sicCode;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public GroupResult withVersion(String version) {
        this.version = version;
        return this;
    }
}