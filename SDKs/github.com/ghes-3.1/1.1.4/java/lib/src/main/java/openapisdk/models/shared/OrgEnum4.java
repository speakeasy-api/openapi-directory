package openapisdk.models.shared;


public enum OrgEnum4 {
    ALL("all"),
    PUBLIC_("public"),
    PRIVATE_("private"),
    FORKS("forks"),
    SOURCES("sources"),
    MEMBER("member"),
    INTERNAL("internal");

    public final String value;

    private OrgEnum4(String value) {
        this.value = value;
    }
}
