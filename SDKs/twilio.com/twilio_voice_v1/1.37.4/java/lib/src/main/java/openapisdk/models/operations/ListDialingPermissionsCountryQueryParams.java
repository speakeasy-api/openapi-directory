package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDialingPermissionsCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Continent")
    public String continent;
    public ListDialingPermissionsCountryQueryParams withContinent(String continent) {
        this.continent = continent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CountryCode")
    public String countryCode;
    public ListDialingPermissionsCountryQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HighRiskSpecialNumbersEnabled")
    public Boolean highRiskSpecialNumbersEnabled;
    public ListDialingPermissionsCountryQueryParams withHighRiskSpecialNumbersEnabled(Boolean highRiskSpecialNumbersEnabled) {
        this.highRiskSpecialNumbersEnabled = highRiskSpecialNumbersEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HighRiskTollfraudNumbersEnabled")
    public Boolean highRiskTollfraudNumbersEnabled;
    public ListDialingPermissionsCountryQueryParams withHighRiskTollfraudNumbersEnabled(Boolean highRiskTollfraudNumbersEnabled) {
        this.highRiskTollfraudNumbersEnabled = highRiskTollfraudNumbersEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IsoCode")
    public String isoCode;
    public ListDialingPermissionsCountryQueryParams withIsoCode(String isoCode) {
        this.isoCode = isoCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LowRiskNumbersEnabled")
    public Boolean lowRiskNumbersEnabled;
    public ListDialingPermissionsCountryQueryParams withLowRiskNumbersEnabled(Boolean lowRiskNumbersEnabled) {
        this.lowRiskNumbersEnabled = lowRiskNumbersEnabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDialingPermissionsCountryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}