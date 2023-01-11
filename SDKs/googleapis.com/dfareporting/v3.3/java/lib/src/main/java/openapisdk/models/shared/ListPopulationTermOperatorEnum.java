package openapisdk.models.shared;


public enum ListPopulationTermOperatorEnum {
    NUM_EQUALS("NUM_EQUALS"),
    NUM_LESS_THAN("NUM_LESS_THAN"),
    NUM_LESS_THAN_EQUAL("NUM_LESS_THAN_EQUAL"),
    NUM_GREATER_THAN("NUM_GREATER_THAN"),
    NUM_GREATER_THAN_EQUAL("NUM_GREATER_THAN_EQUAL"),
    STRING_EQUALS("STRING_EQUALS"),
    STRING_CONTAINS("STRING_CONTAINS");

    public final String value;

    private ListPopulationTermOperatorEnum(String value) {
        this.value = value;
    }
}
