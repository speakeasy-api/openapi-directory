package openapisdk.models.operations;


public enum SearchImagesPeopleAgeEnum {
    INFANTS("infants"),
    CHILDREN("children"),
    TEENAGERS("teenagers"),
    TWENTYS("20s"),
    THIRTYS("30s"),
    FORTYS("40s"),
    FIFTYS("50s"),
    SIXTYS("60s"),
    OLDER("older");

    public final String value;

    private SearchImagesPeopleAgeEnum(String value) {
        this.value = value;
    }
}
