package openapisdk.models.shared;


public enum LicenseEditorialVideoContentLicenseEnum {
    PREMIER_EDITORIAL_VIDEO_DIGITAL_ONLY("premier_editorial_video_digital_only"),
    PREMIER_EDITORIAL_VIDEO_ALL_MEDIA("premier_editorial_video_all_media"),
    PREMIER_EDITORIAL_VIDEO_ALL_MEDIA_SINGLE_TERRITORY("premier_editorial_video_all_media_single_territory"),
    PREMIER_EDITORIAL_VIDEO_COMP("premier_editorial_video_comp");

    public final String value;

    private LicenseEditorialVideoContentLicenseEnum(String value) {
        this.value = value;
    }
}
