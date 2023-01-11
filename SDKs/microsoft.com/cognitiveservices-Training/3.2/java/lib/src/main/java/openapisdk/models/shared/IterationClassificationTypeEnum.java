package openapisdk.models.shared;


public enum IterationClassificationTypeEnum {
    MULTICLASS("Multiclass"),
    MULTILABEL("Multilabel");

    public final String value;

    private IterationClassificationTypeEnum(String value) {
        this.value = value;
    }
}
