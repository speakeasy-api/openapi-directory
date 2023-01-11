package openapisdk.models.shared;


public enum GoogleChromeManagementV1InstalledAppAppInstallTypeEnum {
    APP_INSTALL_TYPE_UNSPECIFIED("APP_INSTALL_TYPE_UNSPECIFIED"),
    MULTIPLE("MULTIPLE"),
    NORMAL("NORMAL"),
    ADMIN("ADMIN"),
    DEVELOPMENT("DEVELOPMENT"),
    SIDELOAD("SIDELOAD"),
    OTHER("OTHER");

    public final String value;

    private GoogleChromeManagementV1InstalledAppAppInstallTypeEnum(String value) {
        this.value = value;
    }
}
