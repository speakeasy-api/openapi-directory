package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsSpotSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetApiVVersionMetalsSpotSummaryQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsSpotSummaryQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metals")
    public String metals;
    public GetApiVVersionMetalsSpotSummaryQueryParams withMetals(String metals) {
        this.metals = metals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsSpotSummaryQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitofmeasure")
    public openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure;
    public GetApiVVersionMetalsSpotSummaryQueryParams withUnitofmeasure(openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure) {
        this.unitofmeasure = unitofmeasure;
        return this;
    }
}