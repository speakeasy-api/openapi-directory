package openapisdk.models.operations;


public enum GetMeFavoritesSortEnum {
    ACTIVITY("activity"),
    CREATION("creation"),
    VOTES("votes"),
    ADDED("added");

    public final String value;

    private GetMeFavoritesSortEnum(String value) {
        this.value = value;
    }
}
