package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextStream
 * Encoding of a text stream. For example, closed captions or subtitles.
**/
public class TextStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codec")
    public String codec;
    public TextStream withCodec(String codec) {
        this.codec = codec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public TextStream withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapping")
    public TextAtom[] mapping;
    public TextStream withMapping(TextAtom[] mapping) {
        this.mapping = mapping;
        return this;
    }
}