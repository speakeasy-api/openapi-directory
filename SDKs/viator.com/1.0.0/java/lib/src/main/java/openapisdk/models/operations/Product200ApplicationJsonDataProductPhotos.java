package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJsonDataProductPhotos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public Product200ApplicationJsonDataProductPhotos withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoURL")
    public String photoURL;
    public Product200ApplicationJsonDataProductPhotos withPhotoUrl(String photoURL) {
        this.photoURL = photoURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplier")
    public String supplier;
    public Product200ApplicationJsonDataProductPhotos withSupplier(String supplier) {
        this.supplier = supplier;
        return this;
    }
}