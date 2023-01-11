package openapisdk.models.shared;


public enum GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum {
    UPDATE_STATE_UNSPECIFIED("UPDATE_STATE_UNSPECIFIED"),
    OS_IMAGE_DOWNLOAD_NOT_STARTED("OS_IMAGE_DOWNLOAD_NOT_STARTED"),
    OS_IMAGE_DOWNLOAD_IN_PROGRESS("OS_IMAGE_DOWNLOAD_IN_PROGRESS"),
    OS_UPDATE_NEED_REBOOT("OS_UPDATE_NEED_REBOOT");

    public final String value;

    private GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum(String value) {
        this.value = value;
    }
}
