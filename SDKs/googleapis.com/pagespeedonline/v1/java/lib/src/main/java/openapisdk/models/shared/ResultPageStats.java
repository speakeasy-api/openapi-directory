package openapisdk.models.shared;



/**
 * ResultPageStats
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
public class ResultPageStats {
    public String cssResponseBytes;
    public ResultPageStats withCssResponseBytes(String cssResponseBytes) {
        this.cssResponseBytes = cssResponseBytes;
        return this;
    }
    public String flashResponseBytes;
    public ResultPageStats withFlashResponseBytes(String flashResponseBytes) {
        this.flashResponseBytes = flashResponseBytes;
        return this;
    }
    public String htmlResponseBytes;
    public ResultPageStats withHtmlResponseBytes(String htmlResponseBytes) {
        this.htmlResponseBytes = htmlResponseBytes;
        return this;
    }
    public String imageResponseBytes;
    public ResultPageStats withImageResponseBytes(String imageResponseBytes) {
        this.imageResponseBytes = imageResponseBytes;
        return this;
    }
    public String javascriptResponseBytes;
    public ResultPageStats withJavascriptResponseBytes(String javascriptResponseBytes) {
        this.javascriptResponseBytes = javascriptResponseBytes;
        return this;
    }
    public Integer numberCssResources;
    public ResultPageStats withNumberCssResources(Integer numberCssResources) {
        this.numberCssResources = numberCssResources;
        return this;
    }
    public Integer numberHosts;
    public ResultPageStats withNumberHosts(Integer numberHosts) {
        this.numberHosts = numberHosts;
        return this;
    }
    public Integer numberJsResources;
    public ResultPageStats withNumberJsResources(Integer numberJsResources) {
        this.numberJsResources = numberJsResources;
        return this;
    }
    public Integer numberResources;
    public ResultPageStats withNumberResources(Integer numberResources) {
        this.numberResources = numberResources;
        return this;
    }
    public Integer numberStaticResources;
    public ResultPageStats withNumberStaticResources(Integer numberStaticResources) {
        this.numberStaticResources = numberStaticResources;
        return this;
    }
    public String otherResponseBytes;
    public ResultPageStats withOtherResponseBytes(String otherResponseBytes) {
        this.otherResponseBytes = otherResponseBytes;
        return this;
    }
    public String textResponseBytes;
    public ResultPageStats withTextResponseBytes(String textResponseBytes) {
        this.textResponseBytes = textResponseBytes;
        return this;
    }
    public String totalRequestBytes;
    public ResultPageStats withTotalRequestBytes(String totalRequestBytes) {
        this.totalRequestBytes = totalRequestBytes;
        return this;
    }
}