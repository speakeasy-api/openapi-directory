package openapisdk.models.shared;


public enum ChallengeEnumChallengeStatusesEnum {
    PENDING("pending"),
    EXPIRED("expired"),
    APPROVED("approved"),
    DENIED("denied");

    public final String value;

    private ChallengeEnumChallengeStatusesEnum(String value) {
        this.value = value;
    }
}
