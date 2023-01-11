package openapisdk.models.shared;


public enum AchievementUpdateRequestUpdateTypeEnum {
    ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED("ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED"),
    REVEAL("REVEAL"),
    UNLOCK("UNLOCK"),
    INCREMENT("INCREMENT"),
    SET_STEPS_AT_LEAST("SET_STEPS_AT_LEAST");

    public final String value;

    private AchievementUpdateRequestUpdateTypeEnum(String value) {
        this.value = value;
    }
}
