package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocalTaxByTaxCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public GetLocalTaxByTaxCodePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public GetLocalTaxByTaxCodePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxCode")
    public String taxCode;
    public GetLocalTaxByTaxCodePathParams withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
}