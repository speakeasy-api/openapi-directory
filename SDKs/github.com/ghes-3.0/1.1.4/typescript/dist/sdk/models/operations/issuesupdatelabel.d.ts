import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesUpdateLabelRequestBody extends SpeakeasyBase {
    /**
     * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
     */
    color?: string;
    /**
     * A short description of the label. Must be 100 characters or fewer.
     */
    description?: string;
    /**
     * The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see "[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet)."
     */
    newName?: string;
}
export declare class IssuesUpdateLabelRequest extends SpeakeasyBase {
    requestBody?: IssuesUpdateLabelRequestBody;
    name: string;
    owner: string;
    repo: string;
}
export declare class IssuesUpdateLabelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    label?: shared.Label;
}
