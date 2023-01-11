package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceUblVersionedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guid")
    public String guid;
    public GetInvoiceUblVersionedPathParams withGuid(String guid) {
        this.guid = guid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_version")
    public GetInvoiceUblVersionedPackageVersionEnum packageVersion;
    public GetInvoiceUblVersionedPathParams withPackageVersion(GetInvoiceUblVersionedPackageVersionEnum packageVersion) {
        this.packageVersion = packageVersion;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=packaging")
    public GetInvoiceUblVersionedPackagingEnum packaging;
    public GetInvoiceUblVersionedPathParams withPackaging(GetInvoiceUblVersionedPackagingEnum packaging) {
        this.packaging = packaging;
        return this;
    }
}