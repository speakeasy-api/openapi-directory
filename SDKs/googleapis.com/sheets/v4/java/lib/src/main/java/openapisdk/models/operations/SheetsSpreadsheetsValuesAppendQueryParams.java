package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SheetsSpreadsheetsValuesAppendQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=$.xgafv")
    public openapisdk.models.shared.XgafvEnum dollarXgafv;
    public SheetsSpreadsheetsValuesAppendQueryParams withDollarXgafv(openapisdk.models.shared.XgafvEnum dollarXgafv) {
        this.dollarXgafv = dollarXgafv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public SheetsSpreadsheetsValuesAppendQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public SheetsSpreadsheetsValuesAppendQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public SheetsSpreadsheetsValuesAppendQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public SheetsSpreadsheetsValuesAppendQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeValuesInResponse")
    public Boolean includeValuesInResponse;
    public SheetsSpreadsheetsValuesAppendQueryParams withIncludeValuesInResponse(Boolean includeValuesInResponse) {
        this.includeValuesInResponse = includeValuesInResponse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=insertDataOption")
    public SheetsSpreadsheetsValuesAppendInsertDataOptionEnum insertDataOption;
    public SheetsSpreadsheetsValuesAppendQueryParams withInsertDataOption(SheetsSpreadsheetsValuesAppendInsertDataOptionEnum insertDataOption) {
        this.insertDataOption = insertDataOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public SheetsSpreadsheetsValuesAppendQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public SheetsSpreadsheetsValuesAppendQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public SheetsSpreadsheetsValuesAppendQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public SheetsSpreadsheetsValuesAppendQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=responseDateTimeRenderOption")
    public SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum responseDateTimeRenderOption;
    public SheetsSpreadsheetsValuesAppendQueryParams withResponseDateTimeRenderOption(SheetsSpreadsheetsValuesAppendResponseDateTimeRenderOptionEnum responseDateTimeRenderOption) {
        this.responseDateTimeRenderOption = responseDateTimeRenderOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=responseValueRenderOption")
    public SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum responseValueRenderOption;
    public SheetsSpreadsheetsValuesAppendQueryParams withResponseValueRenderOption(SheetsSpreadsheetsValuesAppendResponseValueRenderOptionEnum responseValueRenderOption) {
        this.responseValueRenderOption = responseValueRenderOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uploadType")
    public String uploadType;
    public SheetsSpreadsheetsValuesAppendQueryParams withUploadType(String uploadType) {
        this.uploadType = uploadType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=upload_protocol")
    public String uploadProtocol;
    public SheetsSpreadsheetsValuesAppendQueryParams withUploadProtocol(String uploadProtocol) {
        this.uploadProtocol = uploadProtocol;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=valueInputOption")
    public SheetsSpreadsheetsValuesAppendValueInputOptionEnum valueInputOption;
    public SheetsSpreadsheetsValuesAppendQueryParams withValueInputOption(SheetsSpreadsheetsValuesAppendValueInputOptionEnum valueInputOption) {
        this.valueInputOption = valueInputOption;
        return this;
    }
}