package openapisdk.models.shared;


public enum FindingFindingClassEnum {
    FINDING_CLASS_UNSPECIFIED("FINDING_CLASS_UNSPECIFIED"),
    THREAT("THREAT"),
    VULNERABILITY("VULNERABILITY"),
    MISCONFIGURATION("MISCONFIGURATION"),
    OBSERVATION("OBSERVATION"),
    SCC_ERROR("SCC_ERROR");

    public final String value;

    private FindingFindingClassEnum(String value) {
        this.value = value;
    }
}
