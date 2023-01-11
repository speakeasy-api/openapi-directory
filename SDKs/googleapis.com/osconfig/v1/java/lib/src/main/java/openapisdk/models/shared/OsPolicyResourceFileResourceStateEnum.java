package openapisdk.models.shared;


public enum OsPolicyResourceFileResourceStateEnum {
    DESIRED_STATE_UNSPECIFIED("DESIRED_STATE_UNSPECIFIED"),
    PRESENT("PRESENT"),
    ABSENT("ABSENT"),
    CONTENTS_MATCH("CONTENTS_MATCH");

    public final String value;

    private OsPolicyResourceFileResourceStateEnum(String value) {
        this.value = value;
    }
}
