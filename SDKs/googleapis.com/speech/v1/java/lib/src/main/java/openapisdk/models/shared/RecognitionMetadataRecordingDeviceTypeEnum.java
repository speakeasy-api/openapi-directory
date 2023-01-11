package openapisdk.models.shared;


public enum RecognitionMetadataRecordingDeviceTypeEnum {
    RECORDING_DEVICE_TYPE_UNSPECIFIED("RECORDING_DEVICE_TYPE_UNSPECIFIED"),
    SMARTPHONE("SMARTPHONE"),
    PC("PC"),
    PHONE_LINE("PHONE_LINE"),
    VEHICLE("VEHICLE"),
    OTHER_OUTDOOR_DEVICE("OTHER_OUTDOOR_DEVICE"),
    OTHER_INDOOR_DEVICE("OTHER_INDOOR_DEVICE");

    public final String value;

    private RecognitionMetadataRecordingDeviceTypeEnum(String value) {
        this.value = value;
    }
}
