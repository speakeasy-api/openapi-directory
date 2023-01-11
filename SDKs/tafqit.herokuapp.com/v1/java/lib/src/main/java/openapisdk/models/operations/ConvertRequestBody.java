package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConvertRequestBody {
    @SpeakeasyMetadata("multipartForm:name=hundreds_form")
    public String hundredsForm;
    public ConvertRequestBody withHundredsForm(String hundredsForm) {
        this.hundredsForm = hundredsForm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=the_number")
    public String theNumber;
    public ConvertRequestBody withTheNumber(String theNumber) {
        this.theNumber = theNumber;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=unit")
    public String unit;
    public ConvertRequestBody withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}