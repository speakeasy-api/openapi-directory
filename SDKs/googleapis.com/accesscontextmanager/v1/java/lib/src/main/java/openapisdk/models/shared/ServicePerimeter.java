package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServicePerimeter
 * `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
**/
public class ServicePerimeter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServicePerimeter withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServicePerimeter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perimeterType")
    public ServicePerimeterPerimeterTypeEnum perimeterType;
    public ServicePerimeter withPerimeterType(ServicePerimeterPerimeterTypeEnum perimeterType) {
        this.perimeterType = perimeterType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public ServicePerimeterConfig spec;
    public ServicePerimeter withSpec(ServicePerimeterConfig spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ServicePerimeterConfig status;
    public ServicePerimeter withStatus(ServicePerimeterConfig status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ServicePerimeter withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useExplicitDryRunSpec")
    public Boolean useExplicitDryRunSpec;
    public ServicePerimeter withUseExplicitDryRunSpec(Boolean useExplicitDryRunSpec) {
        this.useExplicitDryRunSpec = useExplicitDryRunSpec;
        return this;
    }
}