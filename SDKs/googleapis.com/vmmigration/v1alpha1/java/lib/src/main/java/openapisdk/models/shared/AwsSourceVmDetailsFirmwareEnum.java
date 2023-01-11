package openapisdk.models.shared;


public enum AwsSourceVmDetailsFirmwareEnum {
    FIRMWARE_UNSPECIFIED("FIRMWARE_UNSPECIFIED"),
    EFI("EFI"),
    BIOS("BIOS");

    public final String value;

    private AwsSourceVmDetailsFirmwareEnum(String value) {
        this.value = value;
    }
}
