package openapisdk.models.operations;


public enum AnalyticsGroupByEnum {
    DATE("date"),
    LABEL("label"),
    SUBACCOUNT("subaccount"),
    COUNTRY("country");

    public final String value;

    private AnalyticsGroupByEnum(String value) {
        this.value = value;
    }
}
