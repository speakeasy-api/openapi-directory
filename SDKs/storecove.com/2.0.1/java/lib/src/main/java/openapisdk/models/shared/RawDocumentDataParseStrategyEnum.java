package openapisdk.models.shared;


public enum RawDocumentDataParseStrategyEnum {
    UBL("ubl"),
    CII("cii"),
    IDOC("idoc");

    public final String value;

    private RawDocumentDataParseStrategyEnum(String value) {
        this.value = value;
    }
}
