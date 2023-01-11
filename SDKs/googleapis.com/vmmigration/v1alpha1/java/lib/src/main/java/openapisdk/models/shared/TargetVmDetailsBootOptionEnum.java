package openapisdk.models.shared;


public enum TargetVmDetailsBootOptionEnum {
    BOOT_OPTION_UNSPECIFIED("BOOT_OPTION_UNSPECIFIED"),
    EFI("EFI"),
    BIOS("BIOS");

    public final String value;

    private TargetVmDetailsBootOptionEnum(String value) {
        this.value = value;
    }
}
