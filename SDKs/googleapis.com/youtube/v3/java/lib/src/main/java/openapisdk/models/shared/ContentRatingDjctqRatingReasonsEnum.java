package openapisdk.models.shared;


public enum ContentRatingDjctqRatingReasonsEnum {
    DJCTQ_RATING_REASON_UNSPECIFIED("djctqRatingReasonUnspecified"),
    DJCTQ_VIOLENCE("djctqViolence"),
    DJCTQ_EXTREME_VIOLENCE("djctqExtremeViolence"),
    DJCTQ_SEXUAL_CONTENT("djctqSexualContent"),
    DJCTQ_NUDITY("djctqNudity"),
    DJCTQ_SEX("djctqSex"),
    DJCTQ_EXPLICIT_SEX("djctqExplicitSex"),
    DJCTQ_DRUGS("djctqDrugs"),
    DJCTQ_LEGAL_DRUGS("djctqLegalDrugs"),
    DJCTQ_ILLEGAL_DRUGS("djctqIllegalDrugs"),
    DJCTQ_INAPPROPRIATE_LANGUAGE("djctqInappropriateLanguage"),
    DJCTQ_CRIMINAL_ACTS("djctqCriminalActs"),
    DJCTQ_IMPACTING_CONTENT("djctqImpactingContent");

    public final String value;

    private ContentRatingDjctqRatingReasonsEnum(String value) {
        this.value = value;
    }
}
