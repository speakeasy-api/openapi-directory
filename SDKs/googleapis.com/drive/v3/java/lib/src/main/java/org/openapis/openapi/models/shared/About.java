/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * About - Information about the user, the user's Drive, and system capabilities.
 */
public class About {
    /**
     * Whether the user has installed the requesting app.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appInstalled")
    public Boolean appInstalled;

    public About withAppInstalled(Boolean appInstalled) {
        this.appInstalled = appInstalled;
        return this;
    }
    
    /**
     * Whether the user can create shared drives.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateDrives")
    public Boolean canCreateDrives;

    public About withCanCreateDrives(Boolean canCreateDrives) {
        this.canCreateDrives = canCreateDrives;
        return this;
    }
    
    /**
     * Deprecated - use canCreateDrives instead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canCreateTeamDrives")
    public Boolean canCreateTeamDrives;

    public About withCanCreateTeamDrives(Boolean canCreateTeamDrives) {
        this.canCreateTeamDrives = canCreateTeamDrives;
        return this;
    }
    
    /**
     * A list of themes that are supported for shared drives.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveThemes")
    public AboutDriveThemes[] driveThemes;

    public About withDriveThemes(AboutDriveThemes[] driveThemes) {
        this.driveThemes = driveThemes;
        return this;
    }
    
    /**
     * A map of source MIME type to possible targets for all supported exports.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportFormats")
    public java.util.Map<String, String[]> exportFormats;

    public About withExportFormats(java.util.Map<String, String[]> exportFormats) {
        this.exportFormats = exportFormats;
        return this;
    }
    
    /**
     * The currently supported folder colors as RGB hex strings.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folderColorPalette")
    public String[] folderColorPalette;

    public About withFolderColorPalette(String[] folderColorPalette) {
        this.folderColorPalette = folderColorPalette;
        return this;
    }
    
    /**
     * A map of source MIME type to possible targets for all supported imports.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importFormats")
    public java.util.Map<String, String[]> importFormats;

    public About withImportFormats(java.util.Map<String, String[]> importFormats) {
        this.importFormats = importFormats;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#about".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public About withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * A map of maximum import sizes by MIME type, in bytes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxImportSizes")
    public java.util.Map<String, String> maxImportSizes;

    public About withMaxImportSizes(java.util.Map<String, String> maxImportSizes) {
        this.maxImportSizes = maxImportSizes;
        return this;
    }
    
    /**
     * The maximum upload size in bytes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxUploadSize")
    public String maxUploadSize;

    public About withMaxUploadSize(String maxUploadSize) {
        this.maxUploadSize = maxUploadSize;
        return this;
    }
    
    /**
     * The user's storage quota limits and usage. All fields are measured in bytes.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageQuota")
    public AboutStorageQuota storageQuota;

    public About withStorageQuota(AboutStorageQuota storageQuota) {
        this.storageQuota = storageQuota;
        return this;
    }
    
    /**
     * Deprecated - use driveThemes instead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamDriveThemes")
    public AboutTeamDriveThemes[] teamDriveThemes;

    public About withTeamDriveThemes(AboutTeamDriveThemes[] teamDriveThemes) {
        this.teamDriveThemes = teamDriveThemes;
        return this;
    }
    
    /**
     * Information about a Drive user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;

    public About withUser(User user) {
        this.user = user;
        return this;
    }
    
    public About(){}
}
