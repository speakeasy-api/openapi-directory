package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudVisionV1p2beta1TextAnnotation
 * TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
**/
public class GoogleCloudVisionV1p2beta1TextAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public GoogleCloudVisionV1p2beta1Page[] pages;
    public GoogleCloudVisionV1p2beta1TextAnnotation withPages(GoogleCloudVisionV1p2beta1Page[] pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GoogleCloudVisionV1p2beta1TextAnnotation withText(String text) {
        this.text = text;
        return this;
    }
}