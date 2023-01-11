package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransportationIncentivesLawsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=output_format")
    public TransportationIncentivesLawsOutputFormatEnum outputFormat;
    public TransportationIncentivesLawsPathParams withOutputFormat(TransportationIncentivesLawsOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
}