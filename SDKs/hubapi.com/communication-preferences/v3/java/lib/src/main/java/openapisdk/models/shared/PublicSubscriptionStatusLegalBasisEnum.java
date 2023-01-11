package openapisdk.models.shared;


public enum PublicSubscriptionStatusLegalBasisEnum {
    LEGITIMATE_INTEREST_PQL("LEGITIMATE_INTEREST_PQL"),
    LEGITIMATE_INTEREST_CLIENT("LEGITIMATE_INTEREST_CLIENT"),
    PERFORMANCE_OF_CONTRACT("PERFORMANCE_OF_CONTRACT"),
    CONSENT_WITH_NOTICE("CONSENT_WITH_NOTICE"),
    NON_GDPR("NON_GDPR"),
    PROCESS_AND_STORE("PROCESS_AND_STORE"),
    LEGITIMATE_INTEREST_OTHER("LEGITIMATE_INTEREST_OTHER");

    public final String value;

    private PublicSubscriptionStatusLegalBasisEnum(String value) {
        this.value = value;
    }
}
