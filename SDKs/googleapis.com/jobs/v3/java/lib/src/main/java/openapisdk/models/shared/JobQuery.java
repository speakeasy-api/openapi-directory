package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobQuery
 * Input only. The query required to perform a search query.
**/
public class JobQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commuteFilter")
    public CommuteFilter commuteFilter;
    public JobQuery withCommuteFilter(CommuteFilter commuteFilter) {
        this.commuteFilter = commuteFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyDisplayNames")
    public String[] companyDisplayNames;
    public JobQuery withCompanyDisplayNames(String[] companyDisplayNames) {
        this.companyDisplayNames = companyDisplayNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyNames")
    public String[] companyNames;
    public JobQuery withCompanyNames(String[] companyNames) {
        this.companyNames = companyNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensationFilter")
    public CompensationFilter compensationFilter;
    public JobQuery withCompensationFilter(CompensationFilter compensationFilter) {
        this.compensationFilter = compensationFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customAttributeFilter")
    public String customAttributeFilter;
    public JobQuery withCustomAttributeFilter(String customAttributeFilter) {
        this.customAttributeFilter = customAttributeFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableSpellCheck")
    public Boolean disableSpellCheck;
    public JobQuery withDisableSpellCheck(Boolean disableSpellCheck) {
        this.disableSpellCheck = disableSpellCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employmentTypes")
    public JobQueryEmploymentTypesEnum[] employmentTypes;
    public JobQuery withEmploymentTypes(JobQueryEmploymentTypesEnum[] employmentTypes) {
        this.employmentTypes = employmentTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobCategories")
    public JobQueryJobCategoriesEnum[] jobCategories;
    public JobQuery withJobCategories(JobQueryJobCategoriesEnum[] jobCategories) {
        this.jobCategories = jobCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCodes")
    public String[] languageCodes;
    public JobQuery withLanguageCodes(String[] languageCodes) {
        this.languageCodes = languageCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationFilters")
    public LocationFilter[] locationFilters;
    public JobQuery withLocationFilters(LocationFilter[] locationFilters) {
        this.locationFilters = locationFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishTimeRange")
    public TimestampRange publishTimeRange;
    public JobQuery withPublishTimeRange(TimestampRange publishTimeRange) {
        this.publishTimeRange = publishTimeRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public JobQuery withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryLanguageCode")
    public String queryLanguageCode;
    public JobQuery withQueryLanguageCode(String queryLanguageCode) {
        this.queryLanguageCode = queryLanguageCode;
        return this;
    }
}