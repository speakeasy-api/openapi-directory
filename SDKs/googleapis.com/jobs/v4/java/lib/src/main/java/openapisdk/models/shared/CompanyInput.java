package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompanyInput
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
public class CompanyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("careerSiteUri")
    public String careerSiteUri;
    public CompanyInput withCareerSiteUri(String careerSiteUri) {
        this.careerSiteUri = careerSiteUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivedInfo")
    public CompanyDerivedInfo derivedInfo;
    public CompanyInput withDerivedInfo(CompanyDerivedInfo derivedInfo) {
        this.derivedInfo = derivedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CompanyInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eeoText")
    public String eeoText;
    public CompanyInput withEeoText(String eeoText) {
        this.eeoText = eeoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public CompanyInput withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headquartersAddress")
    public String headquartersAddress;
    public CompanyInput withHeadquartersAddress(String headquartersAddress) {
        this.headquartersAddress = headquartersAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiringAgency")
    public Boolean hiringAgency;
    public CompanyInput withHiringAgency(Boolean hiringAgency) {
        this.hiringAgency = hiringAgency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public CompanyInput withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordSearchableJobCustomAttributes")
    public String[] keywordSearchableJobCustomAttributes;
    public CompanyInput withKeywordSearchableJobCustomAttributes(String[] keywordSearchableJobCustomAttributes) {
        this.keywordSearchableJobCustomAttributes = keywordSearchableJobCustomAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CompanyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public CompanySizeEnum size;
    public CompanyInput withSize(CompanySizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUri")
    public String websiteUri;
    public CompanyInput withWebsiteUri(String websiteUri) {
        this.websiteUri = websiteUri;
        return this;
    }
}