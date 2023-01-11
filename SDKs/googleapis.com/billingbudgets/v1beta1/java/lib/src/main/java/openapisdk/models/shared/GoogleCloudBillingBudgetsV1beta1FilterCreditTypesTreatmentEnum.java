package openapisdk.models.shared;


public enum GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum {
    CREDIT_TYPES_TREATMENT_UNSPECIFIED("CREDIT_TYPES_TREATMENT_UNSPECIFIED"),
    INCLUDE_ALL_CREDITS("INCLUDE_ALL_CREDITS"),
    EXCLUDE_ALL_CREDITS("EXCLUDE_ALL_CREDITS"),
    INCLUDE_SPECIFIED_CREDITS("INCLUDE_SPECIFIED_CREDITS");

    public final String value;

    private GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum(String value) {
        this.value = value;
    }
}
