package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LegalEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisements")
    public LegalEntityDocumentTypeEnum[] advertisements;
    public LegalEntity withAdvertisements(LegalEntityDocumentTypeEnum[] advertisements) {
        this.advertisements = advertisements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public LegalEntity withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public CountryEnum country;
    public LegalEntity withCountry(CountryEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("county")
    public String county;
    public LegalEntity withCounty(String county) {
        this.county = county;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LegalEntity withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line1")
    public String line1;
    public LegalEntity withLine1(String line1) {
        this.line1 = line1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line2")
    public String line2;
    public LegalEntity withLine2(String line2) {
        this.line2 = line2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party_name")
    public String partyName;
    public LegalEntity withPartyName(String partyName) {
        this.partyName = partyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peppol_identifiers")
    public Object[] peppolIdentifiers;
    public LegalEntity withPeppolIdentifiers(Object[] peppolIdentifiers) {
        this.peppolIdentifiers = peppolIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public LegalEntity withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant_id")
    public String tenantId;
    public LegalEntity withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public LegalEntity withZip(String zip) {
        this.zip = zip;
        return this;
    }
}