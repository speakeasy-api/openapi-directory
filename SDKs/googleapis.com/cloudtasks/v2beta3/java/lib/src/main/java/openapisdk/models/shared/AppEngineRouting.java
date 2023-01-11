package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppEngineRouting
 * App Engine Routing. Defines routing characteristics specific to App Engine - service, version, and instance. For more information about services, versions, and instances see [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine), [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine), [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed), and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
**/
public class AppEngineRouting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public AppEngineRouting withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public AppEngineRouting withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public AppEngineRouting withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public AppEngineRouting withVersion(String version) {
        this.version = version;
        return this;
    }
}