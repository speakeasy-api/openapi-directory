import { SpeakeasyBase } from "../../../internal/utils";
import { Grid, GridInput } from "./grid";
import { Image, ImageInput } from "./image";
import { Question, QuestionInput } from "./question";
/**
 * Defines a question that comprises multiple questions grouped together.
 */
export declare class QuestionGroupItem extends SpeakeasyBase {
    /**
     * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
     */
    grid?: Grid;
    /**
     * Data representing an image.
     */
    image?: Image;
    /**
     * Required. A list of questions that belong in this question group. A question must only belong to one group. The `kind` of the group may affect what types of questions are allowed.
     */
    questions?: Question[];
}
/**
 * Defines a question that comprises multiple questions grouped together.
 */
export declare class QuestionGroupItemInput extends SpeakeasyBase {
    /**
     * A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.
     */
    grid?: GridInput;
    /**
     * Data representing an image.
     */
    image?: ImageInput;
    /**
     * Required. A list of questions that belong in this question group. A question must only belong to one group. The `kind` of the group may affect what types of questions are allowed.
     */
    questions?: QuestionInput[];
}
