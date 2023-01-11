package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublishXunitXmlFilesRequest
 * Request message for StepService.PublishXunitXmlFiles.
**/
public class PublishXunitXmlFilesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xunitXmlFiles")
    public FileReference[] xunitXmlFiles;
    public PublishXunitXmlFilesRequest withXunitXmlFiles(FileReference[] xunitXmlFiles) {
        this.xunitXmlFiles = xunitXmlFiles;
        return this;
    }
}