package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAMediaItemRequestBody {
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public UpdateAMediaItemRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=max_downloads_allowed")
    public Long maxDownloadsAllowed;
    public UpdateAMediaItemRequestBody withMaxDownloadsAllowed(Long maxDownloadsAllowed) {
        this.maxDownloadsAllowed = maxDownloadsAllowed;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=metadata_primary")
    public String metadataPrimary;
    public UpdateAMediaItemRequestBody withMetadataPrimary(String metadataPrimary) {
        this.metadataPrimary = metadataPrimary;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=metadata_secondary")
    public String metadataSecondary;
    public UpdateAMediaItemRequestBody withMetadataSecondary(String metadataSecondary) {
        this.metadataSecondary = metadataSecondary;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=mime_type")
    public String mimeType;
    public UpdateAMediaItemRequestBody withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=public")
    public Boolean public_;
    public UpdateAMediaItemRequestBody withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=title")
    public String title;
    public UpdateAMediaItemRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}