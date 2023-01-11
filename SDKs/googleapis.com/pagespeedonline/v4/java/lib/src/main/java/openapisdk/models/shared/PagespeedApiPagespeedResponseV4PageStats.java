package openapisdk.models.shared;



/**
 * PagespeedApiPagespeedResponseV4PageStats
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
public class PagespeedApiPagespeedResponseV4PageStats {
    public String cms;
    public PagespeedApiPagespeedResponseV4PageStats withCms(String cms) {
        this.cms = cms;
        return this;
    }
    public String cssResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withCssResponseBytes(String cssResponseBytes) {
        this.cssResponseBytes = cssResponseBytes;
        return this;
    }
    public String flashResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withFlashResponseBytes(String flashResponseBytes) {
        this.flashResponseBytes = flashResponseBytes;
        return this;
    }
    public String htmlResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withHtmlResponseBytes(String htmlResponseBytes) {
        this.htmlResponseBytes = htmlResponseBytes;
        return this;
    }
    public String imageResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withImageResponseBytes(String imageResponseBytes) {
        this.imageResponseBytes = imageResponseBytes;
        return this;
    }
    public String javascriptResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withJavascriptResponseBytes(String javascriptResponseBytes) {
        this.javascriptResponseBytes = javascriptResponseBytes;
        return this;
    }
    public Integer numRenderBlockingRoundTrips;
    public PagespeedApiPagespeedResponseV4PageStats withNumRenderBlockingRoundTrips(Integer numRenderBlockingRoundTrips) {
        this.numRenderBlockingRoundTrips = numRenderBlockingRoundTrips;
        return this;
    }
    public Integer numTotalRoundTrips;
    public PagespeedApiPagespeedResponseV4PageStats withNumTotalRoundTrips(Integer numTotalRoundTrips) {
        this.numTotalRoundTrips = numTotalRoundTrips;
        return this;
    }
    public Integer numberCssResources;
    public PagespeedApiPagespeedResponseV4PageStats withNumberCssResources(Integer numberCssResources) {
        this.numberCssResources = numberCssResources;
        return this;
    }
    public Integer numberHosts;
    public PagespeedApiPagespeedResponseV4PageStats withNumberHosts(Integer numberHosts) {
        this.numberHosts = numberHosts;
        return this;
    }
    public Integer numberJsResources;
    public PagespeedApiPagespeedResponseV4PageStats withNumberJsResources(Integer numberJsResources) {
        this.numberJsResources = numberJsResources;
        return this;
    }
    public Integer numberResources;
    public PagespeedApiPagespeedResponseV4PageStats withNumberResources(Integer numberResources) {
        this.numberResources = numberResources;
        return this;
    }
    public Integer numberRobotedResources;
    public PagespeedApiPagespeedResponseV4PageStats withNumberRobotedResources(Integer numberRobotedResources) {
        this.numberRobotedResources = numberRobotedResources;
        return this;
    }
    public Integer numberStaticResources;
    public PagespeedApiPagespeedResponseV4PageStats withNumberStaticResources(Integer numberStaticResources) {
        this.numberStaticResources = numberStaticResources;
        return this;
    }
    public Integer numberTransientFetchFailureResources;
    public PagespeedApiPagespeedResponseV4PageStats withNumberTransientFetchFailureResources(Integer numberTransientFetchFailureResources) {
        this.numberTransientFetchFailureResources = numberTransientFetchFailureResources;
        return this;
    }
    public String otherResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withOtherResponseBytes(String otherResponseBytes) {
        this.otherResponseBytes = otherResponseBytes;
        return this;
    }
    public String overTheWireResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withOverTheWireResponseBytes(String overTheWireResponseBytes) {
        this.overTheWireResponseBytes = overTheWireResponseBytes;
        return this;
    }
    public String[] robotedUrls;
    public PagespeedApiPagespeedResponseV4PageStats withRobotedUrls(String[] robotedUrls) {
        this.robotedUrls = robotedUrls;
        return this;
    }
    public String textResponseBytes;
    public PagespeedApiPagespeedResponseV4PageStats withTextResponseBytes(String textResponseBytes) {
        this.textResponseBytes = textResponseBytes;
        return this;
    }
    public String totalRequestBytes;
    public PagespeedApiPagespeedResponseV4PageStats withTotalRequestBytes(String totalRequestBytes) {
        this.totalRequestBytes = totalRequestBytes;
        return this;
    }
    public String[] transientFetchFailureUrls;
    public PagespeedApiPagespeedResponseV4PageStats withTransientFetchFailureUrls(String[] transientFetchFailureUrls) {
        this.transientFetchFailureUrls = transientFetchFailureUrls;
        return this;
    }
}