package openapisdk.models.shared;


public enum AlertPolicyCombinerEnum {
    COMBINE_UNSPECIFIED("COMBINE_UNSPECIFIED"),
    AND("AND"),
    OR("OR"),
    AND_WITH_MATCHING_RESOURCE("AND_WITH_MATCHING_RESOURCE");

    public final String value;

    private AlertPolicyCombinerEnum(String value) {
        this.value = value;
    }
}
