package openapisdk.models.shared;


public enum PatchConfigRebootConfigEnum {
    REBOOT_CONFIG_UNSPECIFIED("REBOOT_CONFIG_UNSPECIFIED"),
    DEFAULT_("DEFAULT"),
    ALWAYS("ALWAYS"),
    NEVER("NEVER");

    public final String value;

    private PatchConfigRebootConfigEnum(String value) {
        this.value = value;
    }
}
