package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Reddit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Reddit withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Reddit withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Reddit withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Reddit withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Reddit withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Reddit withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Reddit withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username_url")
    public String usernameUrl;
    public Reddit withUsernameUrl(String usernameUrl) {
        this.usernameUrl = usernameUrl;
        return this;
    }
}