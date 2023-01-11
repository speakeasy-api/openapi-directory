package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GeocodeReverseRequestBody {
    @SpeakeasyMetadata("form:name=language-code")
    public String languageCode;
    public GeocodeReverseRequestBody withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=latitude")
    public String latitude;
    public GeocodeReverseRequestBody withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=longitude")
    public String longitude;
    public GeocodeReverseRequestBody withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public GeocodeReverseRequestBodyOutputCaseEnum outputCase;
    public GeocodeReverseRequestBody withOutputCase(GeocodeReverseRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=zoom")
    public String zoom;
    public GeocodeReverseRequestBody withZoom(String zoom) {
        this.zoom = zoom;
        return this;
    }
}