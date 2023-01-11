package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountriesGetv1V1CountriesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String[] country;
    public CountriesGetv1V1CountriesGetQueryParams withCountry(String[] country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_id")
    public String countryId;
    public CountriesGetv1V1CountriesGetQueryParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public CountriesGetv1V1CountriesGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public CountriesGetv1V1CountriesGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public java.util.Map<String, Object> orderBy;
    public CountriesGetv1V1CountriesGetQueryParams withOrderBy(java.util.Map<String, Object> orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CountriesGetv1V1CountriesGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public CountriesGetv1V1CountriesGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
}