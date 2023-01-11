package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Job
 * A Job resource represents a job posting (also referred to as a "job listing" or "job requisition"). A job belongs to a Company, which is the hiring entity responsible for the job.
**/
public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public String[] addresses;
    public Job withAddresses(String[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationInfo")
    public ApplicationInfo applicationInfo;
    public Job withApplicationInfo(ApplicationInfo applicationInfo) {
        this.applicationInfo = applicationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyDisplayName")
    public String companyDisplayName;
    public Job withCompanyDisplayName(String companyDisplayName) {
        this.companyDisplayName = companyDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public Job withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensationInfo")
    public CompensationInfo compensationInfo;
    public Job withCompensationInfo(CompensationInfo compensationInfo) {
        this.compensationInfo = compensationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributes")
    public java.util.Map<String, CustomAttribute> customAttributes;
    public Job withCustomAttributes(java.util.Map<String, CustomAttribute> customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("degreeTypes")
    public JobDegreeTypesEnum[] degreeTypes;
    public Job withDegreeTypes(JobDegreeTypesEnum[] degreeTypes) {
        this.degreeTypes = degreeTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department")
    public String department;
    public Job withDepartment(String department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivedInfo")
    public JobDerivedInfo derivedInfo;
    public Job withDerivedInfo(JobDerivedInfo derivedInfo) {
        this.derivedInfo = derivedInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Job withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employmentTypes")
    public JobEmploymentTypesEnum[] employmentTypes;
    public Job withEmploymentTypes(JobEmploymentTypesEnum[] employmentTypes) {
        this.employmentTypes = employmentTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incentives")
    public String incentives;
    public Job withIncentives(String incentives) {
        this.incentives = incentives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobBenefits")
    public JobJobBenefitsEnum[] jobBenefits;
    public Job withJobBenefits(JobJobBenefitsEnum[] jobBenefits) {
        this.jobBenefits = jobBenefits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobEndTime")
    public String jobEndTime;
    public Job withJobEndTime(String jobEndTime) {
        this.jobEndTime = jobEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobLevel")
    public JobJobLevelEnum jobLevel;
    public Job withJobLevel(JobJobLevelEnum jobLevel) {
        this.jobLevel = jobLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobStartTime")
    public String jobStartTime;
    public Job withJobStartTime(String jobStartTime) {
        this.jobStartTime = jobStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public Job withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Job withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingCreateTime")
    public String postingCreateTime;
    public Job withPostingCreateTime(String postingCreateTime) {
        this.postingCreateTime = postingCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingExpireTime")
    public String postingExpireTime;
    public Job withPostingExpireTime(String postingExpireTime) {
        this.postingExpireTime = postingExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingPublishTime")
    public String postingPublishTime;
    public Job withPostingPublishTime(String postingPublishTime) {
        this.postingPublishTime = postingPublishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingRegion")
    public JobPostingRegionEnum postingRegion;
    public Job withPostingRegion(JobPostingRegionEnum postingRegion) {
        this.postingRegion = postingRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postingUpdateTime")
    public String postingUpdateTime;
    public Job withPostingUpdateTime(String postingUpdateTime) {
        this.postingUpdateTime = postingUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingOptions")
    public ProcessingOptions processingOptions;
    public Job withProcessingOptions(ProcessingOptions processingOptions) {
        this.processingOptions = processingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionValue")
    public Integer promotionValue;
    public Job withPromotionValue(Integer promotionValue) {
        this.promotionValue = promotionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualifications")
    public String qualifications;
    public Job withQualifications(String qualifications) {
        this.qualifications = qualifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requisitionId")
    public String requisitionId;
    public Job withRequisitionId(String requisitionId) {
        this.requisitionId = requisitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsibilities")
    public String responsibilities;
    public Job withResponsibilities(String responsibilities) {
        this.responsibilities = responsibilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Job withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public JobVisibilityEnum visibility;
    public Job withVisibility(JobVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}