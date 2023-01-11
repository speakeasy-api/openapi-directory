package openapisdk.models.shared;


public enum CommitComparisonStatusEnum {
    DIVERGED("diverged"),
    AHEAD("ahead"),
    BEHIND("behind"),
    IDENTICAL("identical");

    public final String value;

    private CommitComparisonStatusEnum(String value) {
        this.value = value;
    }
}
