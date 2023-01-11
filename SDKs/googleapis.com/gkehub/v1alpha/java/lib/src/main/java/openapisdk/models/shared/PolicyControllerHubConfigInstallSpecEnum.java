package openapisdk.models.shared;


public enum PolicyControllerHubConfigInstallSpecEnum {
    INSTALL_SPEC_UNSPECIFIED("INSTALL_SPEC_UNSPECIFIED"),
    INSTALL_SPEC_NOT_INSTALLED("INSTALL_SPEC_NOT_INSTALLED"),
    INSTALL_SPEC_ENABLED("INSTALL_SPEC_ENABLED"),
    INSTALL_SPEC_SUSPENDED("INSTALL_SPEC_SUSPENDED");

    public final String value;

    private PolicyControllerHubConfigInstallSpecEnum(String value) {
        this.value = value;
    }
}
