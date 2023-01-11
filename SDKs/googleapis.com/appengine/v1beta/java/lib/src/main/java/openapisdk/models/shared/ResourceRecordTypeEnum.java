package openapisdk.models.shared;


public enum ResourceRecordTypeEnum {
    A("A"),
    AAAA("AAAA"),
    CNAME("CNAME");

    public final String value;

    private ResourceRecordTypeEnum(String value) {
        this.value = value;
    }
}
