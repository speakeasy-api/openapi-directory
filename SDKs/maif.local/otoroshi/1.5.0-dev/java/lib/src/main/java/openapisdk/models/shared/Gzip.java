package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Gzip
 * Configuration for gzip of service responses
**/
public class Gzip {
    @JsonProperty("blackList")
    public String[] blackList;
    public Gzip withBlackList(String[] blackList) {
        this.blackList = blackList;
        return this;
    }
    @JsonProperty("bufferSize")
    public Long bufferSize;
    public Gzip withBufferSize(Long bufferSize) {
        this.bufferSize = bufferSize;
        return this;
    }
    @JsonProperty("chunkedThreshold")
    public Long chunkedThreshold;
    public Gzip withChunkedThreshold(Long chunkedThreshold) {
        this.chunkedThreshold = chunkedThreshold;
        return this;
    }
    @JsonProperty("compressionLevel")
    public Integer compressionLevel;
    public Gzip withCompressionLevel(Integer compressionLevel) {
        this.compressionLevel = compressionLevel;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public Gzip withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("excludedPatterns")
    public String[] excludedPatterns;
    public Gzip withExcludedPatterns(String[] excludedPatterns) {
        this.excludedPatterns = excludedPatterns;
        return this;
    }
    @JsonProperty("whiteList")
    public String[] whiteList;
    public Gzip withWhiteList(String[] whiteList) {
        this.whiteList = whiteList;
        return this;
    }
}