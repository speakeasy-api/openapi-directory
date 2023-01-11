package openapisdk.models.shared;


public enum GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum {
    ROLE_UNSPECIFIED("ROLE_UNSPECIFIED"),
    HUMAN_AGENT("HUMAN_AGENT"),
    AUTOMATED_AGENT("AUTOMATED_AGENT"),
    END_USER("END_USER"),
    ANY_AGENT("ANY_AGENT");

    public final String value;

    private GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum(String value) {
        this.value = value;
    }
}
