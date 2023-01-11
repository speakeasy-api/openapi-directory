package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPhraseSetResponse
 * Message returned to the client by the `ListPhraseSet` method.
**/
public class ListPhraseSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPhraseSetResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseSets")
    public PhraseSet[] phraseSets;
    public ListPhraseSetResponse withPhraseSets(PhraseSet[] phraseSets) {
        this.phraseSets = phraseSets;
        return this;
    }
}