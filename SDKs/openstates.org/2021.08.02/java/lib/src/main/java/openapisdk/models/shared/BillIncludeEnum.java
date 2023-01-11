package openapisdk.models.shared;


public enum BillIncludeEnum {
    SPONSORSHIPS("sponsorships"),
    ABSTRACTS("abstracts"),
    OTHER_TITLES("other_titles"),
    OTHER_IDENTIFIERS("other_identifiers"),
    ACTIONS("actions"),
    SOURCES("sources"),
    DOCUMENTS("documents"),
    VERSIONS("versions"),
    VOTES("votes");

    public final String value;

    private BillIncludeEnum(String value) {
        this.value = value;
    }
}
