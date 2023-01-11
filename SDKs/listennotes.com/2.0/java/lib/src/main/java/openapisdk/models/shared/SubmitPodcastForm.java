package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SubmitPodcastForm {
    @SpeakeasyMetadata("form:name=email")
    public String email;
    public SubmitPodcastForm withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("form:name=rss")
    public String rss;
    public SubmitPodcastForm withRss(String rss) {
        this.rss = rss;
        return this;
    }
}