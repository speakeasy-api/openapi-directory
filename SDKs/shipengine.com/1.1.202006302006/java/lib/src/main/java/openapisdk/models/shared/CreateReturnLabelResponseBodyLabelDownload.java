package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateReturnLabelResponseBodyLabelDownload
 * Reference to the various downloadable file formats for the generated label
 * 
**/
public class CreateReturnLabelResponseBodyLabelDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public CreateReturnLabelResponseBodyLabelDownload withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf")
    public String pdf;
    public CreateReturnLabelResponseBodyLabelDownload withPdf(String pdf) {
        this.pdf = pdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("png")
    public String png;
    public CreateReturnLabelResponseBodyLabelDownload withPng(String png) {
        this.png = png;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zpl")
    public String zpl;
    public CreateReturnLabelResponseBodyLabelDownload withZpl(String zpl) {
        this.zpl = zpl;
        return this;
    }
}