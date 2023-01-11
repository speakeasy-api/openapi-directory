package openapisdk.models.shared;


public enum AssetResponseAttributesStatusEnum {
    IMPORTING("importing"),
    READY("ready"),
    FAILED("failed"),
    DELETED("deleted");

    public final String value;

    private AssetResponseAttributesStatusEnum(String value) {
        this.value = value;
    }
}
