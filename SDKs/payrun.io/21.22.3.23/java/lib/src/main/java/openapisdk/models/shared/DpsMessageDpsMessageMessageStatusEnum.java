package openapisdk.models.shared;


public enum DpsMessageDpsMessageMessageStatusEnum {
    RETRIEVED("Retrieved"),
    APPLIED("Applied"),
    UNRESOLVED("Unresolved"),
    IGNORED("Ignored"),
    INFORMATION("Information");

    public final String value;

    private DpsMessageDpsMessageMessageStatusEnum(String value) {
        this.value = value;
    }
}
