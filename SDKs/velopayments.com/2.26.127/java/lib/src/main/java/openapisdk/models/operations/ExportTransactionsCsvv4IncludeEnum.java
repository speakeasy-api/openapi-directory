package openapisdk.models.operations;


public enum ExportTransactionsCsvv4IncludeEnum {
    PAYOR_ONLY("payorOnly"),
    PAYOR_AND_DESCENDANTS("payorAndDescendants");

    public final String value;

    private ExportTransactionsCsvv4IncludeEnum(String value) {
        this.value = value;
    }
}
