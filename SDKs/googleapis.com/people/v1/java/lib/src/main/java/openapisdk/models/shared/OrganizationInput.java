package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrganizationInput
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
public class OrganizationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costCenter")
    public String costCenter;
    public OrganizationInput withCostCenter(String costCenter) {
        this.costCenter = costCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public Boolean current;
    public OrganizationInput withCurrent(Boolean current) {
        this.current = current;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department")
    public String department;
    public OrganizationInput withDepartment(String department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public OrganizationInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public Date endDate;
    public OrganizationInput withEndDate(Date endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullTimeEquivalentMillipercent")
    public Integer fullTimeEquivalentMillipercent;
    public OrganizationInput withFullTimeEquivalentMillipercent(Integer fullTimeEquivalentMillipercent) {
        this.fullTimeEquivalentMillipercent = fullTimeEquivalentMillipercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDescription")
    public String jobDescription;
    public OrganizationInput withJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public OrganizationInput withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadataInput metadata;
    public OrganizationInput withMetadata(FieldMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrganizationInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneticName")
    public String phoneticName;
    public OrganizationInput withPhoneticName(String phoneticName) {
        this.phoneticName = phoneticName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public Date startDate;
    public OrganizationInput withStartDate(Date startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public OrganizationInput withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OrganizationInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public OrganizationInput withType(String type) {
        this.type = type;
        return this;
    }
}