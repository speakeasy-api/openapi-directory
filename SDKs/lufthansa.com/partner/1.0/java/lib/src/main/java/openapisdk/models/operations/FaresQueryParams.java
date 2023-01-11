package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FaresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carriers")
    public String carriers;
    public FaresQueryParams withCarriers(String carriers) {
        this.carriers = carriers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=catalogues")
    public String catalogues;
    public FaresQueryParams withCatalogues(String catalogues) {
        this.catalogues = catalogues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fare-types")
    public String fareTypes;
    public FaresQueryParams withFareTypes(String fareTypes) {
        this.fareTypes = fareTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segments")
    public String segments;
    public FaresQueryParams withSegments(String segments) {
        this.segments = segments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelers")
    public String travelers;
    public FaresQueryParams withTravelers(String travelers) {
        this.travelers = travelers;
        return this;
    }
}