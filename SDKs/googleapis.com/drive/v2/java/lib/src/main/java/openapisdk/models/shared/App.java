package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * App
 * The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details.
**/
public class App {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized")
    public Boolean authorized;
    public App withAuthorized(Boolean authorized) {
        this.authorized = authorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createInFolderTemplate")
    public String createInFolderTemplate;
    public App withCreateInFolderTemplate(String createInFolderTemplate) {
        this.createInFolderTemplate = createInFolderTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createUrl")
    public String createUrl;
    public App withCreateUrl(String createUrl) {
        this.createUrl = createUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasDriveWideScope")
    public Boolean hasDriveWideScope;
    public App withHasDriveWideScope(Boolean hasDriveWideScope) {
        this.hasDriveWideScope = hasDriveWideScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icons")
    public AppIcons[] icons;
    public App withIcons(AppIcons[] icons) {
        this.icons = icons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public App withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installed")
    public Boolean installed;
    public App withInstalled(Boolean installed) {
        this.installed = installed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public App withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longDescription")
    public String longDescription;
    public App withLongDescription(String longDescription) {
        this.longDescription = longDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public App withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public String objectType;
    public App withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openUrlTemplate")
    public String openUrlTemplate;
    public App withOpenUrlTemplate(String openUrlTemplate) {
        this.openUrlTemplate = openUrlTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryFileExtensions")
    public String[] primaryFileExtensions;
    public App withPrimaryFileExtensions(String[] primaryFileExtensions) {
        this.primaryFileExtensions = primaryFileExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryMimeTypes")
    public String[] primaryMimeTypes;
    public App withPrimaryMimeTypes(String[] primaryMimeTypes) {
        this.primaryMimeTypes = primaryMimeTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public App withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productUrl")
    public String productUrl;
    public App withProductUrl(String productUrl) {
        this.productUrl = productUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryFileExtensions")
    public String[] secondaryFileExtensions;
    public App withSecondaryFileExtensions(String[] secondaryFileExtensions) {
        this.secondaryFileExtensions = secondaryFileExtensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryMimeTypes")
    public String[] secondaryMimeTypes;
    public App withSecondaryMimeTypes(String[] secondaryMimeTypes) {
        this.secondaryMimeTypes = secondaryMimeTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public App withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsCreate")
    public Boolean supportsCreate;
    public App withSupportsCreate(Boolean supportsCreate) {
        this.supportsCreate = supportsCreate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsImport")
    public Boolean supportsImport;
    public App withSupportsImport(Boolean supportsImport) {
        this.supportsImport = supportsImport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsMultiOpen")
    public Boolean supportsMultiOpen;
    public App withSupportsMultiOpen(Boolean supportsMultiOpen) {
        this.supportsMultiOpen = supportsMultiOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsOfflineCreate")
    public Boolean supportsOfflineCreate;
    public App withSupportsOfflineCreate(Boolean supportsOfflineCreate) {
        this.supportsOfflineCreate = supportsOfflineCreate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useByDefault")
    public Boolean useByDefault;
    public App withUseByDefault(Boolean useByDefault) {
        this.useByDefault = useByDefault;
        return this;
    }
}