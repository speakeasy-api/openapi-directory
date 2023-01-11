package openapisdk.models.shared;


public enum PlanDataTypeOfPlanBasedOnTheSourceEnum {
    STARTER("STARTER"),
    SFDC1_M_EDITION("SFDC_1M_EDITION"),
    BRONZE("BRONZE"),
    SILVER("SILVER"),
    GOLD("GOLD"),
    DATASET_DOWNLOAD("DATASET_DOWNLOAD");

    public final String value;

    private PlanDataTypeOfPlanBasedOnTheSourceEnum(String value) {
        this.value = value;
    }
}
