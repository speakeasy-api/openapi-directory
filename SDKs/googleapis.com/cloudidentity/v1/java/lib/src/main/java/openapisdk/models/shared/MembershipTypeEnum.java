package openapisdk.models.shared;


public enum MembershipTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    USER("USER"),
    SERVICE_ACCOUNT("SERVICE_ACCOUNT"),
    GROUP("GROUP"),
    SHARED_DRIVE("SHARED_DRIVE"),
    OTHER("OTHER");

    public final String value;

    private MembershipTypeEnum(String value) {
        this.value = value;
    }
}
