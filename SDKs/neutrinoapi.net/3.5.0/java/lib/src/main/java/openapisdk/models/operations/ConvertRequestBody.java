package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConvertRequestBody {
    @SpeakeasyMetadata("form:name=from-type")
    public String fromType;
    public ConvertRequestBody withFromType(String fromType) {
        this.fromType = fromType;
        return this;
    }
    @SpeakeasyMetadata("form:name=from-value")
    public String fromValue;
    public ConvertRequestBody withFromValue(String fromValue) {
        this.fromValue = fromValue;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public ConvertRequestBodyOutputCaseEnum outputCase;
    public ConvertRequestBody withOutputCase(ConvertRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=to-type")
    public String toType;
    public ConvertRequestBody withToType(String toType) {
        this.toType = toType;
        return this;
    }
}