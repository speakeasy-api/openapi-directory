package openapisdk.models.shared;


public enum SimEnumStatusEnum {
    NEW_("new"),
    READY("ready"),
    ACTIVE("active"),
    SUSPENDED("suspended"),
    DEACTIVATED("deactivated"),
    CANCELED("canceled"),
    SCHEDULED("scheduled"),
    UPDATING("updating");

    public final String value;

    private SimEnumStatusEnum(String value) {
        this.value = value;
    }
}
