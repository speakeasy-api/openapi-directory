package openapisdk.models.shared;



public class TagWikis {
    public String body;
    public TagWikis withBody(String body) {
        this.body = body;
        return this;
    }
    public Long bodyLastEditDate;
    public TagWikis withBodyLastEditDate(Long bodyLastEditDate) {
        this.bodyLastEditDate = bodyLastEditDate;
        return this;
    }
    public String excerpt;
    public TagWikis withExcerpt(String excerpt) {
        this.excerpt = excerpt;
        return this;
    }
    public Long excerptLastEditDate;
    public TagWikis withExcerptLastEditDate(Long excerptLastEditDate) {
        this.excerptLastEditDate = excerptLastEditDate;
        return this;
    }
    public TagWikisLastBodyEditor lastBodyEditor;
    public TagWikis withLastBodyEditor(TagWikisLastBodyEditor lastBodyEditor) {
        this.lastBodyEditor = lastBodyEditor;
        return this;
    }
    public TagWikisLastExcerptEditor lastExcerptEditor;
    public TagWikis withLastExcerptEditor(TagWikisLastExcerptEditor lastExcerptEditor) {
        this.lastExcerptEditor = lastExcerptEditor;
        return this;
    }
    public String tagName;
    public TagWikis withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}