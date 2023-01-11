package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRegulationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndUserType")
    public openapisdk.models.shared.RegulationEnumEndUserTypeEnum endUserType;
    public ListRegulationQueryParams withEndUserType(openapisdk.models.shared.RegulationEnumEndUserTypeEnum endUserType) {
        this.endUserType = endUserType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IsoCountry")
    public String isoCountry;
    public ListRegulationQueryParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NumberType")
    public String numberType;
    public ListRegulationQueryParams withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRegulationQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}