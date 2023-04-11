import { SpeakeasyBase } from "../../../internal/utils";
import { Image, ImageInput } from "./image";
import { Question, QuestionInput } from "./question";
/**
 * A form item containing a single question.
 */
export declare class QuestionItem extends SpeakeasyBase {
    /**
     * Data representing an image.
     */
    image?: Image;
    /**
     * Any question. The specific type of question is known by its `kind`.
     */
    question?: Question;
}
/**
 * A form item containing a single question.
 */
export declare class QuestionItemInput extends SpeakeasyBase {
    /**
     * Data representing an image.
     */
    image?: ImageInput;
    /**
     * Any question. The specific type of question is known by its `kind`.
     */
    question?: QuestionInput;
}
