package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1Operation
 * Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
**/
public class GoogleCloudRecommenderV1Operation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public GoogleCloudRecommenderV1Operation withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GoogleCloudRecommenderV1Operation withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathFilters")
    public java.util.Map<String, Object> pathFilters;
    public GoogleCloudRecommenderV1Operation withPathFilters(java.util.Map<String, Object> pathFilters) {
        this.pathFilters = pathFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathValueMatchers")
    public java.util.Map<String, GoogleCloudRecommenderV1ValueMatcher> pathValueMatchers;
    public GoogleCloudRecommenderV1Operation withPathValueMatchers(java.util.Map<String, GoogleCloudRecommenderV1ValueMatcher> pathValueMatchers) {
        this.pathValueMatchers = pathValueMatchers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public GoogleCloudRecommenderV1Operation withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public GoogleCloudRecommenderV1Operation withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePath")
    public String sourcePath;
    public GoogleCloudRecommenderV1Operation withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceResource")
    public String sourceResource;
    public GoogleCloudRecommenderV1Operation withSourceResource(String sourceResource) {
        this.sourceResource = sourceResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object value;
    public GoogleCloudRecommenderV1Operation withValue(Object value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueMatcher")
    public GoogleCloudRecommenderV1ValueMatcher valueMatcher;
    public GoogleCloudRecommenderV1Operation withValueMatcher(GoogleCloudRecommenderV1ValueMatcher valueMatcher) {
        this.valueMatcher = valueMatcher;
        return this;
    }
}