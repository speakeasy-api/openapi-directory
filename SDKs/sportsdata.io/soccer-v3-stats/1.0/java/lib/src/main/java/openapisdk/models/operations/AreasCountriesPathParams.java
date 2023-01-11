package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AreasCountriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public AreasCountriesFormatEnum format;
    public AreasCountriesPathParams withFormat(AreasCountriesFormatEnum format) {
        this.format = format;
        return this;
    }
}