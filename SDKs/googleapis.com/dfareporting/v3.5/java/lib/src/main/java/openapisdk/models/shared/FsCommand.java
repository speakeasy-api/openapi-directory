package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FsCommand
 * FsCommand.
**/
public class FsCommand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public Integer left;
    public FsCommand withLeft(Integer left) {
        this.left = left;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("positionOption")
    public FsCommandPositionOptionEnum positionOption;
    public FsCommand withPositionOption(FsCommandPositionOptionEnum positionOption) {
        this.positionOption = positionOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("top")
    public Integer top;
    public FsCommand withTop(Integer top) {
        this.top = top;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowHeight")
    public Integer windowHeight;
    public FsCommand withWindowHeight(Integer windowHeight) {
        this.windowHeight = windowHeight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowWidth")
    public Integer windowWidth;
    public FsCommand withWindowWidth(Integer windowWidth) {
        this.windowWidth = windowWidth;
        return this;
    }
}