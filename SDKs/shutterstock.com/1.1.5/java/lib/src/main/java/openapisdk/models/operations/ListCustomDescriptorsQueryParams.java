package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCustomDescriptorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band_id")
    public String bandId;
    public ListCustomDescriptorsQueryParams withBandId(String bandId) {
        this.bandId = bandId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=band_name")
    public String bandName;
    public ListCustomDescriptorsQueryParams withBandName(String bandName) {
        this.bandName = bandName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public ListCustomDescriptorsQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instrument_id")
    public String instrumentId;
    public ListCustomDescriptorsQueryParams withInstrumentId(String instrumentId) {
        this.instrumentId = instrumentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instrument_name")
    public String instrumentName;
    public ListCustomDescriptorsQueryParams withInstrumentName(String instrumentName) {
        this.instrumentName = instrumentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public ListCustomDescriptorsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListCustomDescriptorsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListCustomDescriptorsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=render_speed_over")
    public Double renderSpeedOver;
    public ListCustomDescriptorsQueryParams withRenderSpeedOver(Double renderSpeedOver) {
        this.renderSpeedOver = renderSpeedOver;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public ListCustomDescriptorsQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tempo")
    public Double tempo;
    public ListCustomDescriptorsQueryParams withTempo(Double tempo) {
        this.tempo = tempo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tempo_from")
    public Double tempoFrom;
    public ListCustomDescriptorsQueryParams withTempoFrom(Double tempoFrom) {
        this.tempoFrom = tempoFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tempo_to")
    public Double tempoTo;
    public ListCustomDescriptorsQueryParams withTempoTo(Double tempoTo) {
        this.tempoTo = tempoTo;
        return this;
    }
}