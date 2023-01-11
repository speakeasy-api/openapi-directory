package openapisdk.models.shared;


public enum ResponseStatusCodeStatusClassEnum {
    STATUS_CLASS_UNSPECIFIED("STATUS_CLASS_UNSPECIFIED"),
    STATUS_CLASS1_XX("STATUS_CLASS_1XX"),
    STATUS_CLASS2_XX("STATUS_CLASS_2XX"),
    STATUS_CLASS3_XX("STATUS_CLASS_3XX"),
    STATUS_CLASS4_XX("STATUS_CLASS_4XX"),
    STATUS_CLASS5_XX("STATUS_CLASS_5XX"),
    STATUS_CLASS_ANY("STATUS_CLASS_ANY");

    public final String value;

    private ResponseStatusCodeStatusClassEnum(String value) {
        this.value = value;
    }
}
