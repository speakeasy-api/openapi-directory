package openapisdk.models.shared;


public enum GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum {
    STORED_INFO_TYPE_STATE_UNSPECIFIED("STORED_INFO_TYPE_STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    READY("READY"),
    FAILED("FAILED"),
    INVALID("INVALID");

    public final String value;

    private GooglePrivacyDlpV2StoredInfoTypeVersionStateEnum(String value) {
        this.value = value;
    }
}
