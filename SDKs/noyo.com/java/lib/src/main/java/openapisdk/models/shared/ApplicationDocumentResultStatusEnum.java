package openapisdk.models.shared;


public enum ApplicationDocumentResultStatusEnum {
    ACCEPTED("accepted"),
    IN_PROGRESS("in_progress"),
    INCOMPLETE("incomplete"),
    NOYO_REVIEW("noyo_review"),
    REJECTED("rejected"),
    SUBMITTED("submitted"),
    WIPED("wiped");

    public final String value;

    private ApplicationDocumentResultStatusEnum(String value) {
        this.value = value;
    }
}
