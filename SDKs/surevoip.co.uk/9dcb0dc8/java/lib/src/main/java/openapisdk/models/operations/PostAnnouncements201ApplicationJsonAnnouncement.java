package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAnnouncements201ApplicationJsonAnnouncement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creation_date")
    public String creationDate;
    public PostAnnouncements201ApplicationJsonAnnouncement withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostAnnouncements201ApplicationJsonAnnouncement withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_internal")
    public String fileInternal;
    public PostAnnouncements201ApplicationJsonAnnouncement withFileInternal(String fileInternal) {
        this.fileInternal = fileInternal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public PostAnnouncements201ApplicationJsonAnnouncement withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostAnnouncements201ApplicationJsonAnnouncement withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PostAnnouncements201ApplicationJsonAnnouncement withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src_ip_address")
    public String srcIpAddress;
    public PostAnnouncements201ApplicationJsonAnnouncement withSrcIpAddress(String srcIpAddress) {
        this.srcIpAddress = srcIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public PostAnnouncements201ApplicationJsonAnnouncementUrl url;
    public PostAnnouncements201ApplicationJsonAnnouncement withUrl(PostAnnouncements201ApplicationJsonAnnouncementUrl url) {
        this.url = url;
        return this;
    }
}