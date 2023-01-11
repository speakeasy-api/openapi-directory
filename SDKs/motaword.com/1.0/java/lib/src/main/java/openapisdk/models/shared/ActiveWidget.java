package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ActiveWidget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ActiveWidget withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("follow_user")
    public Boolean followUser;
    public ActiveWidget withFollowUser(Boolean followUser) {
        this.followUser = followUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_cache_refresh_interval")
    public Boolean forceCacheRefreshInterval;
    public ActiveWidget withForceCacheRefreshInterval(Boolean forceCacheRefreshInterval) {
        this.forceCacheRefreshInterval = forceCacheRefreshInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ActiveWidget withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modify_links")
    public Boolean modifyLinks;
    public ActiveWidget withModifyLinks(Boolean modifyLinks) {
        this.modifyLinks = modifyLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ActiveWidget withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public ActiveWidget withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public String theme;
    public ActiveWidget withTheme(String theme) {
        this.theme = theme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public ActiveWidget withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_change_mode")
    public String urlChangeMode;
    public ActiveWidget withUrlChangeMode(String urlChangeMode) {
        this.urlChangeMode = urlChangeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_mode")
    public String urlMode;
    public ActiveWidget withUrlMode(String urlMode) {
        this.urlMode = urlMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_cache")
    public Boolean useCache;
    public ActiveWidget withUseCache(Boolean useCache) {
        this.useCache = useCache;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_dummy_translations")
    public Boolean useDummyTranslations;
    public ActiveWidget withUseDummyTranslations(Boolean useDummyTranslations) {
        this.useDummyTranslations = useDummyTranslations;
        return this;
    }
}