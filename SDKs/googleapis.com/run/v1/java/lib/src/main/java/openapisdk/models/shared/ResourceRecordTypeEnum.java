package openapisdk.models.shared;


public enum ResourceRecordTypeEnum {
    RECORD_TYPE_UNSPECIFIED("RECORD_TYPE_UNSPECIFIED"),
    A("A"),
    AAAA("AAAA"),
    CNAME("CNAME");

    public final String value;

    private ResourceRecordTypeEnum(String value) {
        this.value = value;
    }
}
