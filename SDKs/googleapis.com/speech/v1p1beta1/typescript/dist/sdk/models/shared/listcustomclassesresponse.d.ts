import { SpeakeasyBase } from "../../../internal/utils";
import { CustomClass } from "./customclass";
/**
 * Message returned to the client by the `ListCustomClasses` method.
 */
export declare class ListCustomClassesResponse extends SpeakeasyBase {
    /**
     * The custom classes.
     */
    customClasses?: CustomClass[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
