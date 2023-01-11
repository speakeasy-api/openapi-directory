package openapisdk.models.shared;


public enum BlogArticleAnnouncementTypeEnum {
    ARTICLE("article"),
    CASE_("case"),
    FAMOUS_TRANSLATORS("famous-translators"),
    SALES("sales");

    public final String value;

    private BlogArticleAnnouncementTypeEnum(String value) {
        this.value = value;
    }
}
