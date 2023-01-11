package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductRequestBody {
    @SpeakeasyMetadata("form:name=active")
    public Boolean active;
    public UpdateProductRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("form:name=description")
    public String description;
    public UpdateProductRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=licenseeAutoCreate")
    public Boolean licenseeAutoCreate;
    public UpdateProductRequestBody withLicenseeAutoCreate(Boolean licenseeAutoCreate) {
        this.licenseeAutoCreate = licenseeAutoCreate;
        return this;
    }
    @SpeakeasyMetadata("form:name=licensingInfo")
    public String licensingInfo;
    public UpdateProductRequestBody withLicensingInfo(String licensingInfo) {
        this.licensingInfo = licensingInfo;
        return this;
    }
    @SpeakeasyMetadata("form:name=name")
    public String name;
    public UpdateProductRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public UpdateProductRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=vatMode")
    public UpdateProductRequestBodyVatModeEnum vatMode;
    public UpdateProductRequestBody withVatMode(UpdateProductRequestBodyVatModeEnum vatMode) {
        this.vatMode = vatMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=version")
    public String version;
    public UpdateProductRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}