package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * About
 * Information about the user, the user's Drive, and system capabilities.
**/
public class About {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appInstalled")
    public Boolean appInstalled;
    public About withAppInstalled(Boolean appInstalled) {
        this.appInstalled = appInstalled;
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
    @JsonProperty("driveThemes")
    public AboutDriveThemes[] driveThemes;
    public About withDriveThemes(AboutDriveThemes[] driveThemes) {
        this.driveThemes = driveThemes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportFormats")
    public java.util.Map<String, String[]> exportFormats;
    public About withExportFormats(java.util.Map<String, String[]> exportFormats) {
        this.exportFormats = exportFormats;
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
    public java.util.Map<String, String[]> importFormats;
    public About withImportFormats(java.util.Map<String, String[]> importFormats) {
        this.importFormats = importFormats;
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
    @JsonProperty("maxImportSizes")
    public java.util.Map<String, String> maxImportSizes;
    public About withMaxImportSizes(java.util.Map<String, String> maxImportSizes) {
        this.maxImportSizes = maxImportSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUploadSize")
    public String maxUploadSize;
    public About withMaxUploadSize(String maxUploadSize) {
        this.maxUploadSize = maxUploadSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageQuota")
    public AboutStorageQuota storageQuota;
    public About withStorageQuota(AboutStorageQuota storageQuota) {
        this.storageQuota = storageQuota;
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