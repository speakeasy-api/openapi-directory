package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiffEntry
 * Diff Entry
**/
public class DiffEntry {
    @JsonProperty("additions")
    public Long additions;
    public DiffEntry withAdditions(Long additions) {
        this.additions = additions;
        return this;
    }
    @JsonProperty("blob_url")
    public String blobUrl;
    public DiffEntry withBlobUrl(String blobUrl) {
        this.blobUrl = blobUrl;
        return this;
    }
    @JsonProperty("changes")
    public Long changes;
    public DiffEntry withChanges(Long changes) {
        this.changes = changes;
        return this;
    }
    @JsonProperty("contents_url")
    public String contentsUrl;
    public DiffEntry withContentsUrl(String contentsUrl) {
        this.contentsUrl = contentsUrl;
        return this;
    }
    @JsonProperty("deletions")
    public Long deletions;
    public DiffEntry withDeletions(Long deletions) {
        this.deletions = deletions;
        return this;
    }
    @JsonProperty("filename")
    public String filename;
    public DiffEntry withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patch")
    public String patch;
    public DiffEntry withPatch(String patch) {
        this.patch = patch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_filename")
    public String previousFilename;
    public DiffEntry withPreviousFilename(String previousFilename) {
        this.previousFilename = previousFilename;
        return this;
    }
    @JsonProperty("raw_url")
    public String rawUrl;
    public DiffEntry withRawUrl(String rawUrl) {
        this.rawUrl = rawUrl;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public DiffEntry withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public DiffEntry withStatus(String status) {
        this.status = status;
        return this;
    }
}