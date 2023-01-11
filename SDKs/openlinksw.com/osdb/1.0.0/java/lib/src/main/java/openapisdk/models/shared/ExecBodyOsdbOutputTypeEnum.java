package openapisdk.models.shared;


public enum ExecBodyOsdbOutputTypeEnum {
    URL_ONLY("url_only"),
    GENERATE_RDF("generate_rdf"),
    DISPLAY_RDF("display_rdf");

    public final String value;

    private ExecBodyOsdbOutputTypeEnum(String value) {
        this.value = value;
    }
}
