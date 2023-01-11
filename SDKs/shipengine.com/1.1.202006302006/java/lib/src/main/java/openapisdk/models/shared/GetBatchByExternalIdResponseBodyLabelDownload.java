package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBatchByExternalIdResponseBodyLabelDownload
 * Reference to the various downloadable file formats for the generated label
 * 
**/
public class GetBatchByExternalIdResponseBodyLabelDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public GetBatchByExternalIdResponseBodyLabelDownload withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf")
    public String pdf;
    public GetBatchByExternalIdResponseBodyLabelDownload withPdf(String pdf) {
        this.pdf = pdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("png")
    public String png;
    public GetBatchByExternalIdResponseBodyLabelDownload withPng(String png) {
        this.png = png;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zpl")
    public String zpl;
    public GetBatchByExternalIdResponseBodyLabelDownload withZpl(String zpl) {
        this.zpl = zpl;
        return this;
    }
}