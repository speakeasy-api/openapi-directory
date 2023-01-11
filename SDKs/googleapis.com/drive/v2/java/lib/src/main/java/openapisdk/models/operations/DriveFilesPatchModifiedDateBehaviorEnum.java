package openapisdk.models.operations;


public enum DriveFilesPatchModifiedDateBehaviorEnum {
    FROM_BODY("fromBody"),
    FROM_BODY_IF_NEEDED("fromBodyIfNeeded"),
    FROM_BODY_OR_NOW("fromBodyOrNow"),
    NO_CHANGE("noChange"),
    NOW("now"),
    NOW_IF_NEEDED("nowIfNeeded");

    public final String value;

    private DriveFilesPatchModifiedDateBehaviorEnum(String value) {
        this.value = value;
    }
}
