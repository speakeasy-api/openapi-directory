package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesPatchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addParents")
    public String addParents;
    public DriveFilesPatchQueryParams withAddParents(String addParents) {
        this.addParents = addParents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public openapisdk.models.shared.AltEnum alt;
    public DriveFilesPatchQueryParams withAlt(openapisdk.models.shared.AltEnum alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=convert")
    public Boolean convert;
    public DriveFilesPatchQueryParams withConvert(Boolean convert) {
        this.convert = convert;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enforceSingleParent")
    public Boolean enforceSingleParent;
    public DriveFilesPatchQueryParams withEnforceSingleParent(Boolean enforceSingleParent) {
        this.enforceSingleParent = enforceSingleParent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public DriveFilesPatchQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeLabels")
    public String includeLabels;
    public DriveFilesPatchQueryParams withIncludeLabels(String includeLabels) {
        this.includeLabels = includeLabels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includePermissionsForView")
    public String includePermissionsForView;
    public DriveFilesPatchQueryParams withIncludePermissionsForView(String includePermissionsForView) {
        this.includePermissionsForView = includePermissionsForView;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public DriveFilesPatchQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modifiedDateBehavior")
    public DriveFilesPatchModifiedDateBehaviorEnum modifiedDateBehavior;
    public DriveFilesPatchQueryParams withModifiedDateBehavior(DriveFilesPatchModifiedDateBehaviorEnum modifiedDateBehavior) {
        this.modifiedDateBehavior = modifiedDateBehavior;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=newRevision")
    public Boolean newRevision;
    public DriveFilesPatchQueryParams withNewRevision(Boolean newRevision) {
        this.newRevision = newRevision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=oauth_token")
    public String oauthToken;
    public DriveFilesPatchQueryParams withOauthToken(String oauthToken) {
        this.oauthToken = oauthToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocr")
    public Boolean ocr;
    public DriveFilesPatchQueryParams withOcr(Boolean ocr) {
        this.ocr = ocr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ocrLanguage")
    public String ocrLanguage;
    public DriveFilesPatchQueryParams withOcrLanguage(String ocrLanguage) {
        this.ocrLanguage = ocrLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pinned")
    public Boolean pinned;
    public DriveFilesPatchQueryParams withPinned(Boolean pinned) {
        this.pinned = pinned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prettyPrint")
    public Boolean prettyPrint;
    public DriveFilesPatchQueryParams withPrettyPrint(Boolean prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quotaUser")
    public String quotaUser;
    public DriveFilesPatchQueryParams withQuotaUser(String quotaUser) {
        this.quotaUser = quotaUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=removeParents")
    public String removeParents;
    public DriveFilesPatchQueryParams withRemoveParents(String removeParents) {
        this.removeParents = removeParents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=setModifiedDate")
    public Boolean setModifiedDate;
    public DriveFilesPatchQueryParams withSetModifiedDate(Boolean setModifiedDate) {
        this.setModifiedDate = setModifiedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsAllDrives")
    public Boolean supportsAllDrives;
    public DriveFilesPatchQueryParams withSupportsAllDrives(Boolean supportsAllDrives) {
        this.supportsAllDrives = supportsAllDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=supportsTeamDrives")
    public Boolean supportsTeamDrives;
    public DriveFilesPatchQueryParams withSupportsTeamDrives(Boolean supportsTeamDrives) {
        this.supportsTeamDrives = supportsTeamDrives;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextLanguage")
    public String timedTextLanguage;
    public DriveFilesPatchQueryParams withTimedTextLanguage(String timedTextLanguage) {
        this.timedTextLanguage = timedTextLanguage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timedTextTrackName")
    public String timedTextTrackName;
    public DriveFilesPatchQueryParams withTimedTextTrackName(String timedTextTrackName) {
        this.timedTextTrackName = timedTextTrackName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updateViewedDate")
    public Boolean updateViewedDate;
    public DriveFilesPatchQueryParams withUpdateViewedDate(Boolean updateViewedDate) {
        this.updateViewedDate = updateViewedDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useContentAsIndexableText")
    public Boolean useContentAsIndexableText;
    public DriveFilesPatchQueryParams withUseContentAsIndexableText(Boolean useContentAsIndexableText) {
        this.useContentAsIndexableText = useContentAsIndexableText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userIp")
    public String userIp;
    public DriveFilesPatchQueryParams withUserIp(String userIp) {
        this.userIp = userIp;
        return this;
    }
}