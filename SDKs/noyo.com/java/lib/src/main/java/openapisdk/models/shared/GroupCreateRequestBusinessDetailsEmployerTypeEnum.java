package openapisdk.models.shared;


public enum GroupCreateRequestBusinessDetailsEmployerTypeEnum {
    FOREIGN_GOVERNMENT("foreign_government"),
    PRIVATE_SECTOR("private_sector"),
    RELIGIOUS_EMPLOYER("religious_employer"),
    STATE_GOVERNMENT("state_government"),
    TRIBAL_GOVERNMENT("tribal_government");

    public final String value;

    private GroupCreateRequestBusinessDetailsEmployerTypeEnum(String value) {
        this.value = value;
    }
}
