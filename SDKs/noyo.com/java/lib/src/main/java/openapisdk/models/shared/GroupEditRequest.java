package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GroupEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_details")
    public GroupEditRequestBusinessDetails businessDetails;
    public GroupEditRequest withBusinessDetails(GroupEditRequestBusinessDetails businessDetails) {
        this.businessDetails = businessDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dba_name")
    public String dbaName;
    public GroupEditRequest withDbaName(String dbaName) {
        this.dbaName = dbaName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("federal_ein")
    public String federalEin;
    public GroupEditRequest withFederalEin(String federalEin) {
        this.federalEin = federalEin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_details")
    public GroupEditRequestInsuranceDetails insuranceDetails;
    public GroupEditRequest withInsuranceDetails(GroupEditRequestInsuranceDetails insuranceDetails) {
        this.insuranceDetails = insuranceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GroupEditRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sic_code")
    public String sicCode;
    public GroupEditRequest withSicCode(String sicCode) {
        this.sicCode = sicCode;
        return this;
    }
}