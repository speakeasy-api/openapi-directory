package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultsStorage
 * The storage for test results.
**/
public class ResultsStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resultsStoragePath")
    public FileReference resultsStoragePath;
    public ResultsStorage withResultsStoragePath(FileReference resultsStoragePath) {
        this.resultsStoragePath = resultsStoragePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xunitXmlFile")
    public FileReference xunitXmlFile;
    public ResultsStorage withXunitXmlFile(FileReference xunitXmlFile) {
        this.xunitXmlFile = xunitXmlFile;
        return this;
    }
}