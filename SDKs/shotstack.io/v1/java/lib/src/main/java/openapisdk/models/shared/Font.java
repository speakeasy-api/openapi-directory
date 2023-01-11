package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Font
 * Download a custom font to use with the HTML asset type, using the font name in the CSS or font tag. See our [custom fonts](https://shotstack.io/learn/html-custom-fonts/) getting started guide for more details.
**/
public class Font {
    @JsonProperty("src")
    public String src;
    public Font withSrc(String src) {
        this.src = src;
        return this;
    }
}