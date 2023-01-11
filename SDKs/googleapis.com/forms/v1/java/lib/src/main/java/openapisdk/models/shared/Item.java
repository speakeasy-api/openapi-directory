package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Item
 * A single item of the form. `kind` defines which kind of item it is.
**/
public class Item {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Item withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageItem")
    public ImageItem imageItem;
    public Item withImageItem(ImageItem imageItem) {
        this.imageItem = imageItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public Item withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageBreakItem")
    public java.util.Map<String, Object> pageBreakItem;
    public Item withPageBreakItem(java.util.Map<String, Object> pageBreakItem) {
        this.pageBreakItem = pageBreakItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionGroupItem")
    public QuestionGroupItem questionGroupItem;
    public Item withQuestionGroupItem(QuestionGroupItem questionGroupItem) {
        this.questionGroupItem = questionGroupItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionItem")
    public QuestionItem questionItem;
    public Item withQuestionItem(QuestionItem questionItem) {
        this.questionItem = questionItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textItem")
    public java.util.Map<String, Object> textItem;
    public Item withTextItem(java.util.Map<String, Object> textItem) {
        this.textItem = textItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Item withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoItem")
    public VideoItem videoItem;
    public Item withVideoItem(VideoItem videoItem) {
        this.videoItem = videoItem;
        return this;
    }
}