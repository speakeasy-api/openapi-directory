package openapisdk.models.shared;


public enum JurisdictionClassificationEnum {
    STATE("state"),
    MUNICIPALITY("municipality"),
    COUNTRY("country");

    public final String value;

    private JurisdictionClassificationEnum(String value) {
        this.value = value;
    }
}
