package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TypeaheadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genres")
    public Genre[] genres;
    public TypeaheadResponse withGenres(Genre[] genres) {
        this.genres = genres;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcasts")
    public PodcastTypeaheadResult[] podcasts;
    public TypeaheadResponse withPodcasts(PodcastTypeaheadResult[] podcasts) {
        this.podcasts = podcasts;
        return this;
    }
    @JsonProperty("terms")
    public String[] terms;
    public TypeaheadResponse withTerms(String[] terms) {
        this.terms = terms;
        return this;
    }
}