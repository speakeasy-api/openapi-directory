package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addParents")
    public String addParents;
    public DriveFilesUpdateQueryParams withAddParents(String addParents) {
        this.addParents = addParents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveFilesUpdateQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=convert")
    public Boolean convert;
    public DriveFilesUpdateQueryParams withConvert(Boolean convert) {
        this.convert = convert;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enforceSingleParent")
    public Boolean enforceSingleParent;
    public DriveFilesUpdateQueryParams withEnforceSingleParent(Boolean enforceSingleParent) {
        this.enforceSingleParent = enforceSingleParent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveFilesUpdateQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLabels")
    public String includeLabels;
    public DriveFilesUpdateQueryParams withIncludeLabels(String includeLabels) {
        this.includeLabels = includeLabels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePermissionsForView")
    public String includePermissionsForView;
    public DriveFilesUpdateQueryParams withIncludePermissionsForView(String includePermissionsForView) {
        this.includePermissionsForView = includePermissionsForView;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveFilesUpdateQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modifiedDateBehavior")
    public DriveFilesUpdateModifiedDateBehaviorEnum modifiedDateBehavior;
    public DriveFilesUpdateQueryParams withModifiedDateBehavior(DriveFilesUpdateModifiedDateBehaviorEnum modifiedDateBehavior) {
        this.modifiedDateBehavior = modifiedDateBehavior;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newRevision")
    public Boolean newRevision;
    public DriveFilesUpdateQueryParams withNewRevision(Boolean newRevision) {
        this.newRevision = newRevision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveFilesUpdateQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocr")
    public Boolean ocr;
    public DriveFilesUpdateQueryParams withOcr(Boolean ocr) {
        this.ocr = ocr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocrLanguage")
    public String ocrLanguage;
    public DriveFilesUpdateQueryParams withOcrLanguage(String ocrLanguage) {
        this.ocrLanguage = ocrLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pinned")
    public Boolean pinned;
    public DriveFilesUpdateQueryParams withPinned(Boolean pinned) {
        this.pinned = pinned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveFilesUpdateQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveFilesUpdateQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=removeParents")
    public String removeParents;
    public DriveFilesUpdateQueryParams withRemoveParents(String removeParents) {
        this.removeParents = removeParents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setModifiedDate")
    public Boolean setModifiedDate;
    public DriveFilesUpdateQueryParams withSetModifiedDate(Boolean setModifiedDate) {
        this.setModifiedDate = setModifiedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveFilesUpdateQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveFilesUpdateQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextLanguage")
    public String timedTextLanguage;
    public DriveFilesUpdateQueryParams withTimedTextLanguage(String timedTextLanguage) {
        this.timedTextLanguage = timedTextLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextTrackName")
    public String timedTextTrackName;
    public DriveFilesUpdateQueryParams withTimedTextTrackName(String timedTextTrackName) {
        this.timedTextTrackName = timedTextTrackName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updateViewedDate")
    public Boolean updateViewedDate;
    public DriveFilesUpdateQueryParams withUpdateViewedDate(Boolean updateViewedDate) {
        this.updateViewedDate = updateViewedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useContentAsIndexableText")
    public Boolean useContentAsIndexableText;
    public DriveFilesUpdateQueryParams withUseContentAsIndexableText(Boolean useContentAsIndexableText) {
        this.useContentAsIndexableText = useContentAsIndexableText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveFilesUpdateQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}