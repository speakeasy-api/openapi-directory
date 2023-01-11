package openapisdk.models.shared;



/**
 * ResultScreenshot
 * Base64-encoded screenshot of the page that was analyzed.
**/
public class ResultScreenshot {
    public String data;
    public ResultScreenshot withData(String data) {
        this.data = data;
        return this;
    }
    public Integer height;
    public ResultScreenshot withHeight(Integer height) {
        this.height = height;
        return this;
    }
    public String mimeType;
    public ResultScreenshot withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    public Integer width;
    public ResultScreenshot withWidth(Integer width) {
        this.width = width;
        return this;
    }
}