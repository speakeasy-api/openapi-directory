package openapisdk.models.shared;


public enum RuntimeSoftwareConfigPostStartupScriptBehaviorEnum {
    POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED("POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED"),
    RUN_EVERY_START("RUN_EVERY_START"),
    DOWNLOAD_AND_RUN_EVERY_START("DOWNLOAD_AND_RUN_EVERY_START");

    public final String value;

    private RuntimeSoftwareConfigPostStartupScriptBehaviorEnum(String value) {
        this.value = value;
    }
}
