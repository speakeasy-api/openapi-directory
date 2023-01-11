package openapisdk.models.shared;


public enum GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum {
    ANNOTATION_UNSPECIFIED("ANNOTATION_UNSPECIFIED"),
    LEGITIMATE("LEGITIMATE"),
    FRAUDULENT("FRAUDULENT"),
    PASSWORD_CORRECT("PASSWORD_CORRECT"),
    PASSWORD_INCORRECT("PASSWORD_INCORRECT");

    public final String value;

    private GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequestAnnotationEnum(String value) {
        this.value = value;
    }
}
