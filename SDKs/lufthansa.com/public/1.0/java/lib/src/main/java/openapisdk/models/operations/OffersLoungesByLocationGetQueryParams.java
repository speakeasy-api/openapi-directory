package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OffersLoungesByLocationGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cabinClass")
    public String cabinClass;
    public OffersLoungesByLocationGetQueryParams withCabinClass(String cabinClass) {
        this.cabinClass = cabinClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public OffersLoungesByLocationGetQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tierCode")
    public String tierCode;
    public OffersLoungesByLocationGetQueryParams withTierCode(String tierCode) {
        this.tierCode = tierCode;
        return this;
    }
}