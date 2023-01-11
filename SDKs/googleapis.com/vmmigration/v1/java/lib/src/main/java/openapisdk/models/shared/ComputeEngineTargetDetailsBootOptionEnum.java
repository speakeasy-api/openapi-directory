package openapisdk.models.shared;


public enum ComputeEngineTargetDetailsBootOptionEnum {
    COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED("COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"),
    COMPUTE_ENGINE_BOOT_OPTION_EFI("COMPUTE_ENGINE_BOOT_OPTION_EFI"),
    COMPUTE_ENGINE_BOOT_OPTION_BIOS("COMPUTE_ENGINE_BOOT_OPTION_BIOS");

    public final String value;

    private ComputeEngineTargetDetailsBootOptionEnum(String value) {
        this.value = value;
    }
}
