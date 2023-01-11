package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public SheetsSpreadsheetsValuesUpdateQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public SheetsSpreadsheetsValuesUpdateQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public SheetsSpreadsheetsValuesUpdateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public SheetsSpreadsheetsValuesUpdateQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public SheetsSpreadsheetsValuesUpdateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeValuesInResponse")
    public Boolean includeValuesInResponse;
    public SheetsSpreadsheetsValuesUpdateQueryParams withIncludeValuesInResponse(Boolean includeValuesInResponse) {
        this.includeValuesInResponse = includeValuesInResponse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public SheetsSpreadsheetsValuesUpdateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public SheetsSpreadsheetsValuesUpdateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public SheetsSpreadsheetsValuesUpdateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public SheetsSpreadsheetsValuesUpdateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=responseDateTimeRenderOption")
    public SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum responseDateTimeRenderOption;
    public SheetsSpreadsheetsValuesUpdateQueryParams withResponseDateTimeRenderOption(SheetsSpreadsheetsValuesUpdateResponseDateTimeRenderOptionEnum responseDateTimeRenderOption) {
        this.responseDateTimeRenderOption = responseDateTimeRenderOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=responseValueRenderOption")
    public SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum responseValueRenderOption;
    public SheetsSpreadsheetsValuesUpdateQueryParams withResponseValueRenderOption(SheetsSpreadsheetsValuesUpdateResponseValueRenderOptionEnum responseValueRenderOption) {
        this.responseValueRenderOption = responseValueRenderOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public SheetsSpreadsheetsValuesUpdateQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public SheetsSpreadsheetsValuesUpdateQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=valueInputOption")
    public SheetsSpreadsheetsValuesUpdateValueInputOptionEnum valueInputOption;
    public SheetsSpreadsheetsValuesUpdateQueryParams withValueInputOption(SheetsSpreadsheetsValuesUpdateValueInputOptionEnum valueInputOption) {
        this.valueInputOption = valueInputOption;
        return this;
    }
}