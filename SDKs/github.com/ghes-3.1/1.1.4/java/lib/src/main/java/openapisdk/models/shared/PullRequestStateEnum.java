package openapisdk.models.shared;


public enum PullRequestStateEnum {
    OPEN("open"),
    CLOSED("closed");

    public final String value;

    private PullRequestStateEnum(String value) {
        this.value = value;
    }
}
