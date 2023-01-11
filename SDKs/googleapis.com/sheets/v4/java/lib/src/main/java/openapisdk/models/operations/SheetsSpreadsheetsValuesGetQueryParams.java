package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public SheetsSpreadsheetsValuesGetQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public SheetsSpreadsheetsValuesGetQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public SheetsSpreadsheetsValuesGetQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public SheetsSpreadsheetsValuesGetQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateTimeRenderOption")
    public SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum dateTimeRenderOption;
    public SheetsSpreadsheetsValuesGetQueryParams withDateTimeRenderOption(SheetsSpreadsheetsValuesGetDateTimeRenderOptionEnum dateTimeRenderOption) {
        this.dateTimeRenderOption = dateTimeRenderOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public SheetsSpreadsheetsValuesGetQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public SheetsSpreadsheetsValuesGetQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=majorDimension")
    public SheetsSpreadsheetsValuesGetMajorDimensionEnum majorDimension;
    public SheetsSpreadsheetsValuesGetQueryParams withMajorDimension(SheetsSpreadsheetsValuesGetMajorDimensionEnum majorDimension) {
        this.majorDimension = majorDimension;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public SheetsSpreadsheetsValuesGetQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public SheetsSpreadsheetsValuesGetQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public SheetsSpreadsheetsValuesGetQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public SheetsSpreadsheetsValuesGetQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public SheetsSpreadsheetsValuesGetQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=valueRenderOption")
    public SheetsSpreadsheetsValuesGetValueRenderOptionEnum valueRenderOption;
    public SheetsSpreadsheetsValuesGetQueryParams withValueRenderOption(SheetsSpreadsheetsValuesGetValueRenderOptionEnum valueRenderOption) {
        this.valueRenderOption = valueRenderOption;
        return this;
    }
}