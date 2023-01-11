package openapisdk.models.shared;


public enum ApiDimensionFilterOperatorEnum {
    EQUALS("EQUALS"),
    NOT_EQUALS("NOT_EQUALS"),
    CONTAINS("CONTAINS"),
    NOT_CONTAINS("NOT_CONTAINS"),
    INCLUDING_REGEX("INCLUDING_REGEX"),
    EXCLUDING_REGEX("EXCLUDING_REGEX");

    public final String value;

    private ApiDimensionFilterOperatorEnum(String value) {
        this.value = value;
    }
}
