package openapisdk.models.shared;


public enum HistoryTestPlatformEnum {
    UNKNOWN_PLATFORM("unknownPlatform"),
    ANDROID("android"),
    IOS("ios");

    public final String value;

    private HistoryTestPlatformEnum(String value) {
        this.value = value;
    }
}
