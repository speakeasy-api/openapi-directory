package openapisdk.models.shared;


public enum GroupCoverageResultLineOfCoverageEnum {
    ACCIDENT("accident"),
    ADD("add"),
    CANCER("cancer"),
    CRITICAL_ILLNESS("critical_illness"),
    DENTAL("dental"),
    HOSPITAL_INDEMNITY("hospital_indemnity"),
    LIFE("life"),
    LTD("ltd"),
    MEDICAL("medical"),
    STD("std"),
    VISION("vision");

    public final String value;

    private GroupCoverageResultLineOfCoverageEnum(String value) {
        this.value = value;
    }
}
