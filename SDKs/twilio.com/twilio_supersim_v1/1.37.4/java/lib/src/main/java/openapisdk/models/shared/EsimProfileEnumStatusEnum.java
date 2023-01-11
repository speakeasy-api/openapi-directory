package openapisdk.models.shared;


public enum EsimProfileEnumStatusEnum {
    NEW_("new"),
    RESERVING("reserving"),
    AVAILABLE("available"),
    DOWNLOADED("downloaded"),
    INSTALLED("installed"),
    FAILED("failed");

    public final String value;

    private EsimProfileEnumStatusEnum(String value) {
        this.value = value;
    }
}
