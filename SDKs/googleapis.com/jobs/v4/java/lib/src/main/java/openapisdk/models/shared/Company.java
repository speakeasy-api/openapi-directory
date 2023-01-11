package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Company
 * A Company resource represents a company in the service. A company is the entity that owns job postings, that is, the hiring entity responsible for employing applicants for the job position.
**/
public class Company {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("careerSiteUri")
    public String careerSiteUri;
    public Company withCareerSiteUri(String careerSiteUri) {
        this.careerSiteUri = careerSiteUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivedInfo")
    public CompanyDerivedInfo derivedInfo;
    public Company withDerivedInfo(CompanyDerivedInfo derivedInfo) {
        this.derivedInfo = derivedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Company withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eeoText")
    public String eeoText;
    public Company withEeoText(String eeoText) {
        this.eeoText = eeoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalId")
    public String externalId;
    public Company withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headquartersAddress")
    public String headquartersAddress;
    public Company withHeadquartersAddress(String headquartersAddress) {
        this.headquartersAddress = headquartersAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiringAgency")
    public Boolean hiringAgency;
    public Company withHiringAgency(Boolean hiringAgency) {
        this.hiringAgency = hiringAgency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUri")
    public String imageUri;
    public Company withImageUri(String imageUri) {
        this.imageUri = imageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordSearchableJobCustomAttributes")
    public String[] keywordSearchableJobCustomAttributes;
    public Company withKeywordSearchableJobCustomAttributes(String[] keywordSearchableJobCustomAttributes) {
        this.keywordSearchableJobCustomAttributes = keywordSearchableJobCustomAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Company withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public CompanySizeEnum size;
    public Company withSize(CompanySizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public Company withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUri")
    public String websiteUri;
    public Company withWebsiteUri(String websiteUri) {
        this.websiteUri = websiteUri;
        return this;
    }
}