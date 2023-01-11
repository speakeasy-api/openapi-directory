package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutdatedLibrary
 * Information reported for an outdated library.
**/
public class OutdatedLibrary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnMoreUrls")
    public String[] learnMoreUrls;
    public OutdatedLibrary withLearnMoreUrls(String[] learnMoreUrls) {
        this.learnMoreUrls = learnMoreUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("libraryName")
    public String libraryName;
    public OutdatedLibrary withLibraryName(String libraryName) {
        this.libraryName = libraryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public OutdatedLibrary withVersion(String version) {
        this.version = version;
        return this;
    }
}