package openapisdk.models.shared;


public enum AcceptTranscriptEnum {
    APPLICATION_VND_REV_TRANSCRIPT_V10_PLUS_JSON("application/vnd.rev.transcript.v1.0+json"),
    TEXT_PLAIN("text/plain");

    public final String value;

    private AcceptTranscriptEnum(String value) {
        this.value = value;
    }
}
