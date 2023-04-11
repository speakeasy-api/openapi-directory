import { SpeakeasyBase } from "../../../internal/utils";
export declare class Post extends SpeakeasyBase {
    /**
     * id of the post.
     */
    id?: string;
    /**
     * language_code of the text.
     */
    language: string;
    /**
     * the text to be analysed.
     */
    text: string;
}
