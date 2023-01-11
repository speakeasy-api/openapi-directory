package openapisdk.models.shared;


public enum CommitteeIncludeEnum {
    MEMBERSHIPS("memberships"),
    LINKS("links"),
    SOURCES("sources");

    public final String value;

    private CommitteeIncludeEnum(String value) {
        this.value = value;
    }
}
