package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
}