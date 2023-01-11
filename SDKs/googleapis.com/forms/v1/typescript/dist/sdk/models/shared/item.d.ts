import { SpeakeasyBase } from "../../../internal/utils";
import { ImageItemInput } from "./imageitem";
import { QuestionGroupItemInput } from "./questiongroupitem";
import { QuestionItemInput } from "./questionitem";
import { VideoItem } from "./videoitem";
import { ImageItem } from "./imageitem";
import { QuestionGroupItem } from "./questiongroupitem";
import { QuestionItem } from "./questionitem";
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
export declare class ItemInput extends SpeakeasyBase {
    description?: string;
    imageItem?: ImageItemInput;
    itemId?: string;
    pageBreakItem?: Record<string, any>;
    questionGroupItem?: QuestionGroupItemInput;
    questionItem?: QuestionItemInput;
    textItem?: Record<string, any>;
    title?: string;
    videoItem?: VideoItem;
}
/**
 * A single item of the form. `kind` defines which kind of item it is.
**/
export declare class Item extends SpeakeasyBase {
    description?: string;
    imageItem?: ImageItem;
    itemId?: string;
    pageBreakItem?: Record<string, any>;
    questionGroupItem?: QuestionGroupItem;
    questionItem?: QuestionItem;
    textItem?: Record<string, any>;
    title?: string;
    videoItem?: VideoItem;
}
