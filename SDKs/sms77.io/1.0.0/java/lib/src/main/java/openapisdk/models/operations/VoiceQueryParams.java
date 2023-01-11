package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VoiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public String from;
    public VoiceQueryParams withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public VoiceQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public VoiceQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=xml")
    public Double xml;
    public VoiceQueryParams withXml(Double xml) {
        this.xml = xml;
        return this;
    }
}