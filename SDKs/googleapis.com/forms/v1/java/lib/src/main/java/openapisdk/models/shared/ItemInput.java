package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemInput
 * A single item of the form. `kind` defines which kind of item it is.
**/
public class ItemInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ItemInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageItem")
    public ImageItemInput imageItem;
    public ItemInput withImageItem(ImageItemInput imageItem) {
        this.imageItem = imageItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public ItemInput withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageBreakItem")
    public java.util.Map<String, Object> pageBreakItem;
    public ItemInput withPageBreakItem(java.util.Map<String, Object> pageBreakItem) {
        this.pageBreakItem = pageBreakItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionGroupItem")
    public QuestionGroupItemInput questionGroupItem;
    public ItemInput withQuestionGroupItem(QuestionGroupItemInput questionGroupItem) {
        this.questionGroupItem = questionGroupItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionItem")
    public QuestionItemInput questionItem;
    public ItemInput withQuestionItem(QuestionItemInput questionItem) {
        this.questionItem = questionItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textItem")
    public java.util.Map<String, Object> textItem;
    public ItemInput withTextItem(java.util.Map<String, Object> textItem) {
        this.textItem = textItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ItemInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoItem")
    public VideoItem videoItem;
    public ItemInput withVideoItem(VideoItem videoItem) {
        this.videoItem = videoItem;
        return this;
    }
}