package openapisdk.models.shared;


public enum DeviceIntegrityDeviceRecognitionVerdictEnum {
    UNKNOWN("UNKNOWN"),
    MEETS_BASIC_INTEGRITY("MEETS_BASIC_INTEGRITY"),
    MEETS_DEVICE_INTEGRITY("MEETS_DEVICE_INTEGRITY"),
    MEETS_STRONG_INTEGRITY("MEETS_STRONG_INTEGRITY"),
    MEETS_VIRTUAL_INTEGRITY("MEETS_VIRTUAL_INTEGRITY");

    public final String value;

    private DeviceIntegrityDeviceRecognitionVerdictEnum(String value) {
        this.value = value;
    }
}
