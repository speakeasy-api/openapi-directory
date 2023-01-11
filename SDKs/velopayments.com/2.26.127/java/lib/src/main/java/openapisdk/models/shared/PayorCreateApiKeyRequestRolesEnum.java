package openapisdk.models.shared;


public enum PayorCreateApiKeyRequestRolesEnum {
    PAYOR_ADMIN("payor.admin"),
    PAYOR_SUPPORT("payor.support");

    public final String value;

    private PayorCreateApiKeyRequestRolesEnum(String value) {
        this.value = value;
    }
}
