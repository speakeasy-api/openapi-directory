package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesInsertQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveFilesInsertQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=convert")
    public Boolean convert;
    public DriveFilesInsertQueryParams withConvert(Boolean convert) {
        this.convert = convert;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enforceSingleParent")
    public Boolean enforceSingleParent;
    public DriveFilesInsertQueryParams withEnforceSingleParent(Boolean enforceSingleParent) {
        this.enforceSingleParent = enforceSingleParent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveFilesInsertQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLabels")
    public String includeLabels;
    public DriveFilesInsertQueryParams withIncludeLabels(String includeLabels) {
        this.includeLabels = includeLabels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePermissionsForView")
    public String includePermissionsForView;
    public DriveFilesInsertQueryParams withIncludePermissionsForView(String includePermissionsForView) {
        this.includePermissionsForView = includePermissionsForView;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveFilesInsertQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveFilesInsertQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocr")
    public Boolean ocr;
    public DriveFilesInsertQueryParams withOcr(Boolean ocr) {
        this.ocr = ocr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocrLanguage")
    public String ocrLanguage;
    public DriveFilesInsertQueryParams withOcrLanguage(String ocrLanguage) {
        this.ocrLanguage = ocrLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pinned")
    public Boolean pinned;
    public DriveFilesInsertQueryParams withPinned(Boolean pinned) {
        this.pinned = pinned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveFilesInsertQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveFilesInsertQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveFilesInsertQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveFilesInsertQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextLanguage")
    public String timedTextLanguage;
    public DriveFilesInsertQueryParams withTimedTextLanguage(String timedTextLanguage) {
        this.timedTextLanguage = timedTextLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextTrackName")
    public String timedTextTrackName;
    public DriveFilesInsertQueryParams withTimedTextTrackName(String timedTextTrackName) {
        this.timedTextTrackName = timedTextTrackName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useContentAsIndexableText")
    public Boolean useContentAsIndexableText;
    public DriveFilesInsertQueryParams withUseContentAsIndexableText(Boolean useContentAsIndexableText) {
        this.useContentAsIndexableText = useContentAsIndexableText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveFilesInsertQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=visibility")
    public DriveFilesInsertVisibilityEnum visibility;
    public DriveFilesInsertQueryParams withVisibility(DriveFilesInsertVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}