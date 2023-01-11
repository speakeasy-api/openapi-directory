package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostalAddress
 * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
**/
public class PostalAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressLines")
    public String[] addressLines;
    public PostalAddress withAddressLines(String[] addressLines) {
        this.addressLines = addressLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("administrativeArea")
    public String administrativeArea;
    public PostalAddress withAdministrativeArea(String administrativeArea) {
        this.administrativeArea = administrativeArea;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public PostalAddress withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public String locality;
    public PostalAddress withLocality(String locality) {
        this.locality = locality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public PostalAddress withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public PostalAddress withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public String[] recipients;
    public PostalAddress withRecipients(String[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public PostalAddress withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Integer revision;
    public PostalAddress withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortingCode")
    public String sortingCode;
    public PostalAddress withSortingCode(String sortingCode) {
        this.sortingCode = sortingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sublocality")
    public String sublocality;
    public PostalAddress withSublocality(String sublocality) {
        this.sublocality = sublocality;
        return this;
    }
}