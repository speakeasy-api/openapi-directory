package openapisdk.models.operations;


public enum ListSortEnum {
    EXPIRES_AT("expiresAt"),
    MINUS_EXPIRES_AT("-expiresAt");

    public final String value;

    private ListSortEnum(String value) {
        this.value = value;
    }
}
