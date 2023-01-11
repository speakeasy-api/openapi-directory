package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturesWithinResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=begin")
    public String begin;
    public GetFeaturesWithinResourcePathParams withBegin(String begin) {
        this.begin = begin;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=build")
    public String build;
    public GetFeaturesWithinResourcePathParams withBuild(String build) {
        this.build = build;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=end")
    public String end;
    public GetFeaturesWithinResourcePathParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reference")
    public String reference;
    public GetFeaturesWithinResourcePathParams withReference(String reference) {
        this.reference = reference;
        return this;
    }
}