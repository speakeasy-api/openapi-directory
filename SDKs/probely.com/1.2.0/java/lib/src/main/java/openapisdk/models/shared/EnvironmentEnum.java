package openapisdk.models.shared;


public enum EnvironmentEnum {
    TESTING("testing"),
    PRODUCTION("production");

    public final String value;

    private EnvironmentEnum(String value) {
        this.value = value;
    }
}
