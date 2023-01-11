package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSubContractorsByEffectiveDatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EffectiveDate")
    public LocalDate effectiveDate;
    public GetSubContractorsByEffectiveDatePathParams withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EmployerId")
    public String employerId;
    public GetSubContractorsByEffectiveDatePathParams withEmployerId(String employerId) {
        this.employerId = employerId;
        return this;
    }
}