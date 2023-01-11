package openapisdk.models.shared;


public enum WmxSitemapTypeEnum {
    NOT_SITEMAP("NOT_SITEMAP"),
    URL_LIST("URL_LIST"),
    SITEMAP("SITEMAP"),
    RSS_FEED("RSS_FEED"),
    ATOM_FEED("ATOM_FEED"),
    PATTERN_SITEMAP("PATTERN_SITEMAP"),
    OCEANFRONT("OCEANFRONT");

    public final String value;

    private WmxSitemapTypeEnum(String value) {
        this.value = value;
    }
}
