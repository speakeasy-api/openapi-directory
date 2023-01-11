package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1Filter
 * A filter for a budget, limiting the scope of the cost to calculate.
**/
public class GoogleCloudBillingBudgetsV1Filter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarPeriod")
    public GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum calendarPeriod;
    public GoogleCloudBillingBudgetsV1Filter withCalendarPeriod(GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum calendarPeriod) {
        this.calendarPeriod = calendarPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTypes")
    public String[] creditTypes;
    public GoogleCloudBillingBudgetsV1Filter withCreditTypes(String[] creditTypes) {
        this.creditTypes = creditTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditTypesTreatment")
    public GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum creditTypesTreatment;
    public GoogleCloudBillingBudgetsV1Filter withCreditTypesTreatment(GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum creditTypesTreatment) {
        this.creditTypesTreatment = creditTypesTreatment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customPeriod")
    public GoogleCloudBillingBudgetsV1CustomPeriod customPeriod;
    public GoogleCloudBillingBudgetsV1Filter withCustomPeriod(GoogleCloudBillingBudgetsV1CustomPeriod customPeriod) {
        this.customPeriod = customPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object[]> labels;
    public GoogleCloudBillingBudgetsV1Filter withLabels(java.util.Map<String, Object[]> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public String[] projects;
    public GoogleCloudBillingBudgetsV1Filter withProjects(String[] projects) {
        this.projects = projects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public String[] services;
    public GoogleCloudBillingBudgetsV1Filter withServices(String[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subaccounts")
    public String[] subaccounts;
    public GoogleCloudBillingBudgetsV1Filter withSubaccounts(String[] subaccounts) {
        this.subaccounts = subaccounts;
        return this;
    }
}