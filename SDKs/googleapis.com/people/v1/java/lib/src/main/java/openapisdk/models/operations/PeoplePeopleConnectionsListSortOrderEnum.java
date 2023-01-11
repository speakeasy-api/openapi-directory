package openapisdk.models.operations;


public enum PeoplePeopleConnectionsListSortOrderEnum {
    LAST_MODIFIED_ASCENDING("LAST_MODIFIED_ASCENDING"),
    LAST_MODIFIED_DESCENDING("LAST_MODIFIED_DESCENDING"),
    FIRST_NAME_ASCENDING("FIRST_NAME_ASCENDING"),
    LAST_NAME_ASCENDING("LAST_NAME_ASCENDING");

    public final String value;

    private PeoplePeopleConnectionsListSortOrderEnum(String value) {
        this.value = value;
    }
}
