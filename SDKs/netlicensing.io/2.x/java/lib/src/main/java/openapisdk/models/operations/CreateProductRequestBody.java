package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public CreateProductRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=description")
    public String description;
    public CreateProductRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseeAutoCreate")
    public Boolean licenseeAutoCreate;
    public CreateProductRequestBody withLicenseeAutoCreate(Boolean licenseeAutoCreate) {
        this.licenseeAutoCreate = licenseeAutoCreate;
        return this;
    }
    @SpeakeasyMetadata("form:name=licensingInfo")
    public String licensingInfo;
    public CreateProductRequestBody withLicensingInfo(String licensingInfo) {
        this.licensingInfo = licensingInfo;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public CreateProductRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public CreateProductRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=vatMode")
    public CreateProductRequestBodyVatModeEnum vatMode;
    public CreateProductRequestBody withVatMode(CreateProductRequestBodyVatModeEnum vatMode) {
        this.vatMode = vatMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=version")
    public String version;
    public CreateProductRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}