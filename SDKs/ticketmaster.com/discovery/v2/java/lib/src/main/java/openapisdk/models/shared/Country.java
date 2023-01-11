package openapisdk.models.shared;



/**
 * Country
 * Country
**/
public class Country {
    public String countryCode;
    public Country withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    public String name;
    public Country withName(String name) {
        this.name = name;
        return this;
    }
}