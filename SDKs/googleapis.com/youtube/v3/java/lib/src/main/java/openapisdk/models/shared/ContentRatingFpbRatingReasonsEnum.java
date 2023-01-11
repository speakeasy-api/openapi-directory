package openapisdk.models.shared;


public enum ContentRatingFpbRatingReasonsEnum {
    FPB_RATING_REASON_UNSPECIFIED("fpbRatingReasonUnspecified"),
    FPB_BLASPHEMY("fpbBlasphemy"),
    FPB_LANGUAGE("fpbLanguage"),
    FPB_NUDITY("fpbNudity"),
    FPB_PREJUDICE("fpbPrejudice"),
    FPB_SEX("fpbSex"),
    FPB_VIOLENCE("fpbViolence"),
    FPB_DRUGS("fpbDrugs"),
    FPB_SEXUAL_VIOLENCE("fpbSexualViolence"),
    FPB_HORROR("fpbHorror"),
    FPB_CRIMINAL_TECHNIQUES("fpbCriminalTechniques"),
    FPB_IMITATIVE_ACTS_TECHNIQUES("fpbImitativeActsTechniques");

    public final String value;

    private ContentRatingFpbRatingReasonsEnum(String value) {
        this.value = value;
    }
}
