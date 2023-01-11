package openapisdk.models.shared;


public enum PartnerEntityStatusEnum {
    ENTITY_STATUS_UNSPECIFIED("ENTITY_STATUS_UNSPECIFIED"),
    ENTITY_STATUS_ACTIVE("ENTITY_STATUS_ACTIVE"),
    ENTITY_STATUS_ARCHIVED("ENTITY_STATUS_ARCHIVED"),
    ENTITY_STATUS_DRAFT("ENTITY_STATUS_DRAFT"),
    ENTITY_STATUS_PAUSED("ENTITY_STATUS_PAUSED"),
    ENTITY_STATUS_SCHEDULED_FOR_DELETION("ENTITY_STATUS_SCHEDULED_FOR_DELETION");

    public final String value;

    private PartnerEntityStatusEnum(String value) {
        this.value = value;
    }
}
