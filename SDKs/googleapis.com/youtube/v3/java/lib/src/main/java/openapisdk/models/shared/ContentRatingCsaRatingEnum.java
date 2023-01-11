package openapisdk.models.shared;


public enum ContentRatingCsaRatingEnum {
    CSA_UNSPECIFIED("csaUnspecified"),
    CSA_T("csaT"),
    CSA10("csa10"),
    CSA12("csa12"),
    CSA16("csa16"),
    CSA18("csa18"),
    CSA_INTERDICTION("csaInterdiction"),
    CSA_UNRATED("csaUnrated");

    public final String value;

    private ContentRatingCsaRatingEnum(String value) {
        this.value = value;
    }
}
