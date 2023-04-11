import { SpeakeasyBase } from "../../../internal/utils";
import { ImageItem, ImageItemInput } from "./imageitem";
import { QuestionGroupItem, QuestionGroupItemInput } from "./questiongroupitem";
import { QuestionItem, QuestionItemInput } from "./questionitem";
import { VideoItem } from "./videoitem";
/**
 * A single item of the form. `kind` defines which kind of item it is.
 */
export declare class Item extends SpeakeasyBase {
    /**
     * The description of the item.
     */
    description?: string;
    /**
     * An item containing an image.
     */
    imageItem?: ImageItem;
    /**
     * The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.
     */
    itemId?: string;
    /**
     * A page break. The title and description of this item are shown at the top of the new page.
     */
    pageBreakItem?: Record<string, any>;
    /**
     * Defines a question that comprises multiple questions grouped together.
     */
    questionGroupItem?: QuestionGroupItem;
    /**
     * A form item containing a single question.
     */
    questionItem?: QuestionItem;
    /**
     * A text item.
     */
    textItem?: Record<string, any>;
    /**
     * The title of the item.
     */
    title?: string;
    /**
     * An item containing a video.
     */
    videoItem?: VideoItem;
}
/**
 * A single item of the form. `kind` defines which kind of item it is.
 */
export declare class ItemInput extends SpeakeasyBase {
    /**
     * The description of the item.
     */
    description?: string;
    /**
     * An item containing an image.
     */
    imageItem?: ImageItemInput;
    /**
     * The item ID. On creation, it can be provided but the ID must not be already used in the form. If not provided, a new ID is assigned.
     */
    itemId?: string;
    /**
     * A page break. The title and description of this item are shown at the top of the new page.
     */
    pageBreakItem?: Record<string, any>;
    /**
     * Defines a question that comprises multiple questions grouped together.
     */
    questionGroupItem?: QuestionGroupItemInput;
    /**
     * A form item containing a single question.
     */
    questionItem?: QuestionItemInput;
    /**
     * A text item.
     */
    textItem?: Record<string, any>;
    /**
     * The title of the item.
     */
    title?: string;
    /**
     * An item containing a video.
     */
    videoItem?: VideoItem;
}
