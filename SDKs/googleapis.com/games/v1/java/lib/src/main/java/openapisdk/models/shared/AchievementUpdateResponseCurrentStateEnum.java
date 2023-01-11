package openapisdk.models.shared;


public enum AchievementUpdateResponseCurrentStateEnum {
    UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED("UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED"),
    HIDDEN("HIDDEN"),
    REVEALED("REVEALED"),
    UNLOCKED("UNLOCKED");

    public final String value;

    private AchievementUpdateResponseCurrentStateEnum(String value) {
        this.value = value;
    }
}
