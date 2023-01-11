package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EntryPoint {
    @JsonProperty("content_types")
    public String[] contentTypes;
    public EntryPoint withContentTypes(String[] contentTypes) {
        this.contentTypes = contentTypes;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public EntryPoint withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("encoding_types")
    public String[] encodingTypes;
    public EntryPoint withEncodingTypes(String[] encodingTypes) {
        this.encodingTypes = encodingTypes;
        return this;
    }
    @JsonProperty("http_method")
    public EntryPointHttpMethodEnum httpMethod;
    public EntryPoint withHttpMethod(EntryPointHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EntryPoint withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parameters")
    public EntryPointParameter[] parameters;
    public EntryPoint withParameters(EntryPointParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public EntryPoint withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("url_template")
    public String urlTemplate;
    public EntryPoint withUrlTemplate(String urlTemplate) {
        this.urlTemplate = urlTemplate;
        return this;
    }
}