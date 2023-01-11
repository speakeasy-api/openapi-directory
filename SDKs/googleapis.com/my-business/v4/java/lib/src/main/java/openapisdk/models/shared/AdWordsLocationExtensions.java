package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdWordsLocationExtensions
 * Additional information that is surfaced in AdWords.
**/
public class AdWordsLocationExtensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adPhone")
    public String adPhone;
    public AdWordsLocationExtensions withAdPhone(String adPhone) {
        this.adPhone = adPhone;
        return this;
    }
}