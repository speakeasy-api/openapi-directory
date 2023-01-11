package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobInput
 * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
**/
public class JobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public String[] addresses;
    public JobInput withAddresses(String[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationInfo")
    public ApplicationInfo applicationInfo;
    public JobInput withApplicationInfo(ApplicationInfo applicationInfo) {
        this.applicationInfo = applicationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public JobInput withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensationInfo")
    public CompensationInfo compensationInfo;
    public JobInput withCompensationInfo(CompensationInfo compensationInfo) {
        this.compensationInfo = compensationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributes")
    public java.util.Map<String, CustomAttribute> customAttributes;
    public JobInput withCustomAttributes(java.util.Map<String, CustomAttribute> customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("degreeTypes")
    public JobDegreeTypesEnum[] degreeTypes;
    public JobInput withDegreeTypes(JobDegreeTypesEnum[] degreeTypes) {
        this.degreeTypes = degreeTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department")
    public String department;
    public JobInput withDepartment(String department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivedInfo")
    public JobDerivedInfo derivedInfo;
    public JobInput withDerivedInfo(JobDerivedInfo derivedInfo) {
        this.derivedInfo = derivedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public JobInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employmentTypes")
    public JobEmploymentTypesEnum[] employmentTypes;
    public JobInput withEmploymentTypes(JobEmploymentTypesEnum[] employmentTypes) {
        this.employmentTypes = employmentTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incentives")
    public String incentives;
    public JobInput withIncentives(String incentives) {
        this.incentives = incentives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobBenefits")
    public JobJobBenefitsEnum[] jobBenefits;
    public JobInput withJobBenefits(JobJobBenefitsEnum[] jobBenefits) {
        this.jobBenefits = jobBenefits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobEndTime")
    public String jobEndTime;
    public JobInput withJobEndTime(String jobEndTime) {
        this.jobEndTime = jobEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobLevel")
    public JobJobLevelEnum jobLevel;
    public JobInput withJobLevel(JobJobLevelEnum jobLevel) {
        this.jobLevel = jobLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobStartTime")
    public String jobStartTime;
    public JobInput withJobStartTime(String jobStartTime) {
        this.jobStartTime = jobStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public JobInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public JobInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingExpireTime")
    public String postingExpireTime;
    public JobInput withPostingExpireTime(String postingExpireTime) {
        this.postingExpireTime = postingExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingPublishTime")
    public String postingPublishTime;
    public JobInput withPostingPublishTime(String postingPublishTime) {
        this.postingPublishTime = postingPublishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingRegion")
    public JobPostingRegionEnum postingRegion;
    public JobInput withPostingRegion(JobPostingRegionEnum postingRegion) {
        this.postingRegion = postingRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingOptions")
    public ProcessingOptions processingOptions;
    public JobInput withProcessingOptions(ProcessingOptions processingOptions) {
        this.processingOptions = processingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionValue")
    public Integer promotionValue;
    public JobInput withPromotionValue(Integer promotionValue) {
        this.promotionValue = promotionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualifications")
    public String qualifications;
    public JobInput withQualifications(String qualifications) {
        this.qualifications = qualifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requisitionId")
    public String requisitionId;
    public JobInput withRequisitionId(String requisitionId) {
        this.requisitionId = requisitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsibilities")
    public String responsibilities;
    public JobInput withResponsibilities(String responsibilities) {
        this.responsibilities = responsibilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public JobInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public JobVisibilityEnum visibility;
    public JobInput withVisibility(JobVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}