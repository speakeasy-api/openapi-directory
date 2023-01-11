package openapisdk.models.shared;


public enum AchievementDefinitionInitialStateEnum {
    INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED("INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED"),
    HIDDEN("HIDDEN"),
    REVEALED("REVEALED"),
    UNLOCKED("UNLOCKED");

    public final String value;

    private AchievementDefinitionInitialStateEnum(String value) {
        this.value = value;
    }
}
