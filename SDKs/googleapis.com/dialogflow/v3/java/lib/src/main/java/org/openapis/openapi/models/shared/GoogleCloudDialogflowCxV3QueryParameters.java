/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowCxV3QueryParameters - Represents the parameters of a conversational query.
 */
public class GoogleCloudDialogflowCxV3QueryParameters {
    /**
     * Configures whether sentiment analysis should be performed. If not provided, sentiment analysis is not performed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyzeQueryTextSentiment")
    public Boolean analyzeQueryTextSentiment;

    public GoogleCloudDialogflowCxV3QueryParameters withAnalyzeQueryTextSentiment(Boolean analyzeQueryTextSentiment) {
        this.analyzeQueryTextSentiment = analyzeQueryTextSentiment;
        return this;
    }
    
    /**
     * The channel which this query is for. If specified, only the ResponseMessage associated with the channel will be returned. If no ResponseMessage is associated with the channel, it falls back to the ResponseMessage with unspecified channel. If unspecified, the ResponseMessage with unspecified channel will be returned.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public String channel;

    public GoogleCloudDialogflowCxV3QueryParameters withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    
    /**
     * The unique identifier of the page to override the current page in the session. Format: `projects//locations//agents//flows//pages/`. If `current_page` is specified, the previous state of the session will be ignored by Dialogflow, including the previous page and the previous session parameters. In most cases, current_page and parameters should be configured together to direct a session to a specific state.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPage")
    public String currentPage;

    public GoogleCloudDialogflowCxV3QueryParameters withCurrentPage(String currentPage) {
        this.currentPage = currentPage;
        return this;
    }
    
    /**
     * Whether to disable webhook calls for this request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableWebhook")
    public Boolean disableWebhook;

    public GoogleCloudDialogflowCxV3QueryParameters withDisableWebhook(Boolean disableWebhook) {
        this.disableWebhook = disableWebhook;
        return this;
    }
    
    /**
     * A list of flow versions to override for the request. Format: `projects//locations//agents//flows//versions/`. If version 1 of flow X is included in this list, the traffic of flow X will go through version 1 regardless of the version configuration in the environment. Each flow can have at most one version specified in this list.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowVersions")
    public String[] flowVersions;

    public GoogleCloudDialogflowCxV3QueryParameters withFlowVersions(String[] flowVersions) {
        this.flowVersions = flowVersions;
        return this;
    }
    
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoLocation")
    public GoogleTypeLatLng geoLocation;

    public GoogleCloudDialogflowCxV3QueryParameters withGeoLocation(GoogleTypeLatLng geoLocation) {
        this.geoLocation = geoLocation;
        return this;
    }
    
    /**
     * Additional parameters to be put into session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. You can reference the session parameters in the agent with the following format: $session.params.parameter-id. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter's entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter's entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;

    public GoogleCloudDialogflowCxV3QueryParameters withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    
    /**
     * This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: ``` { "telephony": { "caller_id": "+18558363987" } } ```
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public java.util.Map<String, Object> payload;

    public GoogleCloudDialogflowCxV3QueryParameters withPayload(java.util.Map<String, Object> payload) {
        this.payload = payload;
        return this;
    }
    
    /**
     * Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionEntityTypes")
    public GoogleCloudDialogflowCxV3SessionEntityType[] sessionEntityTypes;

    public GoogleCloudDialogflowCxV3QueryParameters withSessionEntityTypes(GoogleCloudDialogflowCxV3SessionEntityType[] sessionEntityTypes) {
        this.sessionEntityTypes = sessionEntityTypes;
        return this;
    }
    
    /**
     * The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in the agent is used.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;

    public GoogleCloudDialogflowCxV3QueryParameters withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    
    /**
     * This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google's specified headers are not allowed. Including: "Host", "Content-Length", "Connection", "From", "User-Agent", "Accept-Encoding", "If-Modified-Since", "If-None-Match", "X-Forwarded-For", etc.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookHeaders")
    public java.util.Map<String, String> webhookHeaders;

    public GoogleCloudDialogflowCxV3QueryParameters withWebhookHeaders(java.util.Map<String, String> webhookHeaders) {
        this.webhookHeaders = webhookHeaders;
        return this;
    }
    
    public GoogleCloudDialogflowCxV3QueryParameters(){}
}
