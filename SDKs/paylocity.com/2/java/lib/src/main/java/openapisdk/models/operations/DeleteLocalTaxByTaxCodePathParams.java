package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLocalTaxByTaxCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=companyId")
    public String companyId;
    public DeleteLocalTaxByTaxCodePathParams withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=employeeId")
    public String employeeId;
    public DeleteLocalTaxByTaxCodePathParams withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taxCode")
    public String taxCode;
    public DeleteLocalTaxByTaxCodePathParams withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
}