package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunnerApplication
 * Runner Application
**/
public class RunnerApplication {
    @JsonProperty("architecture")
    public String architecture;
    public RunnerApplication withArchitecture(String architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonProperty("download_url")
    public String downloadUrl;
    public RunnerApplication withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonProperty("filename")
    public String filename;
    public RunnerApplication withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonProperty("os")
    public String os;
    public RunnerApplication withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sha256_checksum")
    public String sha256Checksum;
    public RunnerApplication withSha256Checksum(String sha256Checksum) {
        this.sha256Checksum = sha256Checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temp_download_token")
    public String tempDownloadToken;
    public RunnerApplication withTempDownloadToken(String tempDownloadToken) {
        this.tempDownloadToken = tempDownloadToken;
        return this;
    }
}