package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParseAddressRequestBody
 * The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.
 * 
**/
public class ParseAddressRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public PartialAddress address;
    public ParseAddressRequestBody withAddress(PartialAddress address) {
        this.address = address;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public ParseAddressRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}