package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldValue
 * Contains a value of a Field.
**/
public class FieldValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public Date date;
    public FieldValue withDate(Date date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integer")
    public Integer integer;
    public FieldValue withInteger(Integer integer) {
        this.integer = integer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selection")
    public Selection selection;
    public FieldValue withSelection(Selection selection) {
        this.selection = selection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionList")
    public SelectionList selectionList;
    public FieldValue withSelectionList(SelectionList selectionList) {
        this.selectionList = selectionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public Text text;
    public FieldValue withText(Text text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textList")
    public TextList textList;
    public FieldValue withTextList(TextList textList) {
        this.textList = textList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public SingleUser user;
    public FieldValue withUser(SingleUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userList")
    public UserList userList;
    public FieldValue withUserList(UserList userList) {
        this.userList = userList;
        return this;
    }
}