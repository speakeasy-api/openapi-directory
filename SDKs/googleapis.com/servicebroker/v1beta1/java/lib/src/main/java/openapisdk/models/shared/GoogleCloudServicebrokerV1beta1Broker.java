package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudServicebrokerV1beta1Broker
 * Broker represents a consumable collection of Service Registry catalogs
 * exposed as an OSB Broker.
**/
public class GoogleCloudServicebrokerV1beta1Broker {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudServicebrokerV1beta1Broker withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudServicebrokerV1beta1Broker withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleCloudServicebrokerV1beta1Broker withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoogleCloudServicebrokerV1beta1Broker withUrl(String url) {
        this.url = url;
        return this;
    }
}