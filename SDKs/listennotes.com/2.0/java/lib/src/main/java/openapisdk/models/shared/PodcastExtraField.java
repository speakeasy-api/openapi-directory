package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PodcastExtraField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facebook_handle")
    public String facebookHandle;
    public PodcastExtraField withFacebookHandle(String facebookHandle) {
        this.facebookHandle = facebookHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_url")
    public String googleUrl;
    public PodcastExtraField withGoogleUrl(String googleUrl) {
        this.googleUrl = googleUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instagram_handle")
    public String instagramHandle;
    public PodcastExtraField withInstagramHandle(String instagramHandle) {
        this.instagramHandle = instagramHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedin_url")
    public String linkedinUrl;
    public PodcastExtraField withLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patreon_handle")
    public String patreonHandle;
    public PodcastExtraField withPatreonHandle(String patreonHandle) {
        this.patreonHandle = patreonHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spotify_url")
    public String spotifyUrl;
    public PodcastExtraField withSpotifyUrl(String spotifyUrl) {
        this.spotifyUrl = spotifyUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter_handle")
    public String twitterHandle;
    public PodcastExtraField withTwitterHandle(String twitterHandle) {
        this.twitterHandle = twitterHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url1")
    public String url1;
    public PodcastExtraField withUrl1(String url1) {
        this.url1 = url1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url2")
    public String url2;
    public PodcastExtraField withUrl2(String url2) {
        this.url2 = url2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url3")
    public String url3;
    public PodcastExtraField withUrl3(String url3) {
        this.url3 = url3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wechat_handle")
    public String wechatHandle;
    public PodcastExtraField withWechatHandle(String wechatHandle) {
        this.wechatHandle = wechatHandle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtube_url")
    public String youtubeUrl;
    public PodcastExtraField withYoutubeUrl(String youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
        return this;
    }
}