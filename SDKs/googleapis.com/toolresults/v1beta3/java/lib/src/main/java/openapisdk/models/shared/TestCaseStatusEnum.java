package openapisdk.models.shared;


public enum TestCaseStatusEnum {
    PASSED("passed"),
    FAILED("failed"),
    ERROR("error"),
    SKIPPED("skipped"),
    FLAKY("flaky");

    public final String value;

    private TestCaseStatusEnum(String value) {
        this.value = value;
    }
}
