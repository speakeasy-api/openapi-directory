package openapisdk.models.shared;


public enum GradeHistoryGradeChangeTypeEnum {
    UNKNOWN_GRADE_CHANGE_TYPE("UNKNOWN_GRADE_CHANGE_TYPE"),
    DRAFT_GRADE_POINTS_EARNED_CHANGE("DRAFT_GRADE_POINTS_EARNED_CHANGE"),
    ASSIGNED_GRADE_POINTS_EARNED_CHANGE("ASSIGNED_GRADE_POINTS_EARNED_CHANGE"),
    MAX_POINTS_CHANGE("MAX_POINTS_CHANGE");

    public final String value;

    private GradeHistoryGradeChangeTypeEnum(String value) {
        this.value = value;
    }
}
