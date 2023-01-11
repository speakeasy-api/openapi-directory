package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZipInfo
 * The zip file information for a zip deployment.
**/
public class ZipInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filesCount")
    public Integer filesCount;
    public ZipInfo withFilesCount(Integer filesCount) {
        this.filesCount = filesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUrl")
    public String sourceUrl;
    public ZipInfo withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
}