package openapisdk.models.shared;


public enum NoteCreatorRoleEnum {
    BUYER_SELLER_ROLE_UNSPECIFIED("BUYER_SELLER_ROLE_UNSPECIFIED"),
    BUYER("BUYER"),
    SELLER("SELLER");

    public final String value;

    private NoteCreatorRoleEnum(String value) {
        this.value = value;
    }
}
