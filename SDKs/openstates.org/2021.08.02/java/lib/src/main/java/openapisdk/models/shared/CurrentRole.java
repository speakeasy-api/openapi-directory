package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CurrentRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public Object district;
    public CurrentRole withDistrict(Object district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division_id")
    public String divisionId;
    public CurrentRole withDivisionId(String divisionId) {
        this.divisionId = divisionId;
        return this;
    }
    @JsonProperty("org_classification")
    public OrgClassificationEnum orgClassification;
    public CurrentRole withOrgClassification(OrgClassificationEnum orgClassification) {
        this.orgClassification = orgClassification;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CurrentRole withTitle(String title) {
        this.title = title;
        return this;
    }
}