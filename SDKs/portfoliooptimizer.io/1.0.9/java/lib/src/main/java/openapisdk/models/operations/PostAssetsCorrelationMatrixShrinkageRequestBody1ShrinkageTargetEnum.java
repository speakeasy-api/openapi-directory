package openapisdk.models.operations;


public enum PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum {
    MINIMUM_EQUICORRELATION_MATRIX("minimumEquicorrelationMatrix"),
    ZERO_EQUICORRELATION_MATRIX("zeroEquicorrelationMatrix"),
    MAXIMUM_EQUICORRELATION_MATRIX("maximumEquicorrelationMatrix");

    public final String value;

    private PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum(String value) {
        this.value = value;
    }
}
