package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveFilesCopyQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=convert")
    public Boolean convert;
    public DriveFilesCopyQueryParams withConvert(Boolean convert) {
        this.convert = convert;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enforceSingleParent")
    public Boolean enforceSingleParent;
    public DriveFilesCopyQueryParams withEnforceSingleParent(Boolean enforceSingleParent) {
        this.enforceSingleParent = enforceSingleParent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveFilesCopyQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLabels")
    public String includeLabels;
    public DriveFilesCopyQueryParams withIncludeLabels(String includeLabels) {
        this.includeLabels = includeLabels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePermissionsForView")
    public String includePermissionsForView;
    public DriveFilesCopyQueryParams withIncludePermissionsForView(String includePermissionsForView) {
        this.includePermissionsForView = includePermissionsForView;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveFilesCopyQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveFilesCopyQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocr")
    public Boolean ocr;
    public DriveFilesCopyQueryParams withOcr(Boolean ocr) {
        this.ocr = ocr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocrLanguage")
    public String ocrLanguage;
    public DriveFilesCopyQueryParams withOcrLanguage(String ocrLanguage) {
        this.ocrLanguage = ocrLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pinned")
    public Boolean pinned;
    public DriveFilesCopyQueryParams withPinned(Boolean pinned) {
        this.pinned = pinned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveFilesCopyQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveFilesCopyQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveFilesCopyQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveFilesCopyQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextLanguage")
    public String timedTextLanguage;
    public DriveFilesCopyQueryParams withTimedTextLanguage(String timedTextLanguage) {
        this.timedTextLanguage = timedTextLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextTrackName")
    public String timedTextTrackName;
    public DriveFilesCopyQueryParams withTimedTextTrackName(String timedTextTrackName) {
        this.timedTextTrackName = timedTextTrackName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveFilesCopyQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=visibility")
    public DriveFilesCopyVisibilityEnum visibility;
    public DriveFilesCopyQueryParams withVisibility(DriveFilesCopyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}