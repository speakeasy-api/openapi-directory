package openapisdk.models.shared;


public enum CodeScanningAlertClassificationEnum {
    SOURCE("source"),
    GENERATED("generated"),
    TEST("test"),
    LIBRARY("library");

    public final String value;

    private CodeScanningAlertClassificationEnum(String value) {
        this.value = value;
    }
}
