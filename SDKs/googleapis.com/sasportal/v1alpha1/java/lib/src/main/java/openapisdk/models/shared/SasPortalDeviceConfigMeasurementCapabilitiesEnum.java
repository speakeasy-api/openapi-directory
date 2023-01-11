package openapisdk.models.shared;


public enum SasPortalDeviceConfigMeasurementCapabilitiesEnum {
    MEASUREMENT_CAPABILITY_UNSPECIFIED("MEASUREMENT_CAPABILITY_UNSPECIFIED"),
    MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT("MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITH_GRANT"),
    MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT("MEASUREMENT_CAPABILITY_RECEIVED_POWER_WITHOUT_GRANT");

    public final String value;

    private SasPortalDeviceConfigMeasurementCapabilitiesEnum(String value) {
        this.value = value;
    }
}
