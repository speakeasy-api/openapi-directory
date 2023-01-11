package openapisdk.models.shared;


public enum TestStatusStatusEnum {
    TEST_STATUS_UNSPECIFIED("TEST_STATUS_UNSPECIFIED"),
    COMPLETE("COMPLETE"),
    INTERNAL_ERROR("INTERNAL_ERROR"),
    PAGE_UNREACHABLE("PAGE_UNREACHABLE");

    public final String value;

    private TestStatusStatusEnum(String value) {
        this.value = value;
    }
}
