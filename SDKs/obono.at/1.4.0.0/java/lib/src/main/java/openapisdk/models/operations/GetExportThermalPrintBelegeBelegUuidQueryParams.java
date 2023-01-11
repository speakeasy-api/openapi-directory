package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportThermalPrintBelegeBelegUuidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dialect")
    public GetExportThermalPrintBelegeBelegUuidDialectEnum dialect;
    public GetExportThermalPrintBelegeBelegUuidQueryParams withDialect(GetExportThermalPrintBelegeBelegUuidDialectEnum dialect) {
        this.dialect = dialect;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=encoding")
    public GetExportThermalPrintBelegeBelegUuidEncodingEnum encoding;
    public GetExportThermalPrintBelegeBelegUuidQueryParams withEncoding(GetExportThermalPrintBelegeBelegUuidEncodingEnum encoding) {
        this.encoding = encoding;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=qr")
    public Boolean qr;
    public GetExportThermalPrintBelegeBelegUuidQueryParams withQr(Boolean qr) {
        this.qr = qr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Long width;
    public GetExportThermalPrintBelegeBelegUuidQueryParams withWidth(Long width) {
        this.width = width;
        return this;
    }
}