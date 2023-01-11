package openapisdk.models.shared;


public enum AwsVmDetailsBootOptionEnum {
    BOOT_OPTION_UNSPECIFIED("BOOT_OPTION_UNSPECIFIED"),
    EFI("EFI"),
    BIOS("BIOS");

    public final String value;

    private AwsVmDetailsBootOptionEnum(String value) {
        this.value = value;
    }
}
