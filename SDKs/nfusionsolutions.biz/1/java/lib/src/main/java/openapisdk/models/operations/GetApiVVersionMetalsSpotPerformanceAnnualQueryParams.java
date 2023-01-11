package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotPerformanceAnnualQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetApiVVersionMetalsSpotPerformanceAnnualQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsSpotPerformanceAnnualQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metals")
    public String metals;
    public GetApiVVersionMetalsSpotPerformanceAnnualQueryParams withMetals(String metals) {
        this.metals = metals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsSpotPerformanceAnnualQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitofmeasure")
    public openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure;
    public GetApiVVersionMetalsSpotPerformanceAnnualQueryParams withUnitofmeasure(openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure) {
        this.unitofmeasure = unitofmeasure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=years")
    public Integer years;
    public GetApiVVersionMetalsSpotPerformanceAnnualQueryParams withYears(Integer years) {
        this.years = years;
        return this;
    }
}