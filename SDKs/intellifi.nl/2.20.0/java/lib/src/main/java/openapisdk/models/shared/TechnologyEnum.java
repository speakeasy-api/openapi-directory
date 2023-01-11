package openapisdk.models.shared;


public enum TechnologyEnum {
    BLUETOOTH("bluetooth"),
    OPTICAL("optical"),
    RFID("rfid");

    public final String value;

    private TechnologyEnum(String value) {
        this.value = value;
    }
}
