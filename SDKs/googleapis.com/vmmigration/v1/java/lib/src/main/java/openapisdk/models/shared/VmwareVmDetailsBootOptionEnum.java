package openapisdk.models.shared;


public enum VmwareVmDetailsBootOptionEnum {
    BOOT_OPTION_UNSPECIFIED("BOOT_OPTION_UNSPECIFIED"),
    EFI("EFI"),
    BIOS("BIOS");

    public final String value;

    private VmwareVmDetailsBootOptionEnum(String value) {
        this.value = value;
    }
}
