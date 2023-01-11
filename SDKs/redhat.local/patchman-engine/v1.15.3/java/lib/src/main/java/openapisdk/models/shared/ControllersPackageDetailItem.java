package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ControllersPackageDetailItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public ControllersPackageDetailAttributes attributes;
    public ControllersPackageDetailItem withAttributes(ControllersPackageDetailAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ControllersPackageDetailItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ControllersPackageDetailItem withType(String type) {
        this.type = type;
        return this;
    }
}