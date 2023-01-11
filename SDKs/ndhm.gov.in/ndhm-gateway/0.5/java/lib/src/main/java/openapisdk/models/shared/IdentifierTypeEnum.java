package openapisdk.models.shared;


public enum IdentifierTypeEnum {
    MOBILE("MOBILE"),
    MR("MR"),
    NDHM_HEALTH_NUMBER("NDHM_HEALTH_NUMBER"),
    HEALTH_ID("HEALTH_ID");

    public final String value;

    private IdentifierTypeEnum(String value) {
        this.value = value;
    }
}
