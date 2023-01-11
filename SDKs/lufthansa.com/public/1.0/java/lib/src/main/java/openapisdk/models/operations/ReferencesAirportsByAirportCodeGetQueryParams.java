package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirportsByAirportCodeGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LHoperated")
    public Boolean lHoperated;
    public ReferencesAirportsByAirportCodeGetQueryParams withLHoperated(Boolean lHoperated) {
        this.lHoperated = lHoperated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public ReferencesAirportsByAirportCodeGetQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ReferencesAirportsByAirportCodeGetQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ReferencesAirportsByAirportCodeGetQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}