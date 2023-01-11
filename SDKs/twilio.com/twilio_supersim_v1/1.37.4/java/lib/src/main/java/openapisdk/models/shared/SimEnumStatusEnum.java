package openapisdk.models.shared;


public enum SimEnumStatusEnum {
    NEW_("new"),
    READY("ready"),
    ACTIVE("active"),
    INACTIVE("inactive"),
    SCHEDULED("scheduled");

    public final String value;

    private SimEnumStatusEnum(String value) {
        this.value = value;
    }
}
