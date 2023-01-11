package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * About
 * An item with user information and settings.
**/
public class About {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalRoleInfo")
    public AboutAdditionalRoleInfo[] additionalRoleInfo;
    public About withAdditionalRoleInfo(AboutAdditionalRoleInfo[] additionalRoleInfo) {
        this.additionalRoleInfo = additionalRoleInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateDrives")
    public Boolean canCreateDrives;
    public About withCanCreateDrives(Boolean canCreateDrives) {
        this.canCreateDrives = canCreateDrives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateTeamDrives")
    public Boolean canCreateTeamDrives;
    public About withCanCreateTeamDrives(Boolean canCreateTeamDrives) {
        this.canCreateTeamDrives = canCreateTeamDrives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainSharingPolicy")
    public String domainSharingPolicy;
    public About withDomainSharingPolicy(String domainSharingPolicy) {
        this.domainSharingPolicy = domainSharingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveThemes")
    public AboutDriveThemes[] driveThemes;
    public About withDriveThemes(AboutDriveThemes[] driveThemes) {
        this.driveThemes = driveThemes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public About withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportFormats")
    public AboutExportFormats[] exportFormats;
    public About withExportFormats(AboutExportFormats[] exportFormats) {
        this.exportFormats = exportFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public AboutFeatures[] features;
    public About withFeatures(AboutFeatures[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folderColorPalette")
    public String[] folderColorPalette;
    public About withFolderColorPalette(String[] folderColorPalette) {
        this.folderColorPalette = folderColorPalette;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importFormats")
    public AboutImportFormats[] importFormats;
    public About withImportFormats(AboutImportFormats[] importFormats) {
        this.importFormats = importFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCurrentAppInstalled")
    public Boolean isCurrentAppInstalled;
    public About withIsCurrentAppInstalled(Boolean isCurrentAppInstalled) {
        this.isCurrentAppInstalled = isCurrentAppInstalled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public About withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public About withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largestChangeId")
    public String largestChangeId;
    public About withLargestChangeId(String largestChangeId) {
        this.largestChangeId = largestChangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUploadSizes")
    public AboutMaxUploadSizes[] maxUploadSizes;
    public About withMaxUploadSizes(AboutMaxUploadSizes[] maxUploadSizes) {
        this.maxUploadSizes = maxUploadSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public About withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionId")
    public String permissionId;
    public About withPermissionId(String permissionId) {
        this.permissionId = permissionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaBytesByService")
    public AboutQuotaBytesByService[] quotaBytesByService;
    public About withQuotaBytesByService(AboutQuotaBytesByService[] quotaBytesByService) {
        this.quotaBytesByService = quotaBytesByService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaBytesTotal")
    public String quotaBytesTotal;
    public About withQuotaBytesTotal(String quotaBytesTotal) {
        this.quotaBytesTotal = quotaBytesTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaBytesUsed")
    public String quotaBytesUsed;
    public About withQuotaBytesUsed(String quotaBytesUsed) {
        this.quotaBytesUsed = quotaBytesUsed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaBytesUsedAggregate")
    public String quotaBytesUsedAggregate;
    public About withQuotaBytesUsedAggregate(String quotaBytesUsedAggregate) {
        this.quotaBytesUsedAggregate = quotaBytesUsedAggregate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaBytesUsedInTrash")
    public String quotaBytesUsedInTrash;
    public About withQuotaBytesUsedInTrash(String quotaBytesUsedInTrash) {
        this.quotaBytesUsedInTrash = quotaBytesUsedInTrash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaType")
    public String quotaType;
    public About withQuotaType(String quotaType) {
        this.quotaType = quotaType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingChangeIds")
    public String remainingChangeIds;
    public About withRemainingChangeIds(String remainingChangeIds) {
        this.remainingChangeIds = remainingChangeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootFolderId")
    public String rootFolderId;
    public About withRootFolderId(String rootFolderId) {
        this.rootFolderId = rootFolderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public About withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDriveThemes")
    public AboutTeamDriveThemes[] teamDriveThemes;
    public About withTeamDriveThemes(AboutTeamDriveThemes[] teamDriveThemes) {
        this.teamDriveThemes = teamDriveThemes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public About withUser(User user) {
        this.user = user;
        return this;
    }
}