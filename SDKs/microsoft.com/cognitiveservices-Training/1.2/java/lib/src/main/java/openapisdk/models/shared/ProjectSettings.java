package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * ProjectSettings
 * Represents settings associated with a project
**/
public class ProjectSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainId")
@SpeakeasyMetadata("form:name=DomainId")
    public String domainId;
    public ProjectSettings withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
}