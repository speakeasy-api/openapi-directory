package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiVVersionMetalsBenchmarkSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currency")
    public String currency;
    public GetApiVVersionMetalsBenchmarkSummaryQueryParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetApiVVersionMetalsBenchmarkSummaryQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metals")
    public String metals;
    public GetApiVVersionMetalsBenchmarkSummaryQueryParams withMetals(String metals) {
        this.metals = metals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetApiVVersionMetalsBenchmarkSummaryQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unitofmeasure")
    public openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure;
    public GetApiVVersionMetalsBenchmarkSummaryQueryParams withUnitofmeasure(openapisdk.models.shared.UnitOfMeasureEnum unitofmeasure) {
        this.unitofmeasure = unitofmeasure;
        return this;
    }
}