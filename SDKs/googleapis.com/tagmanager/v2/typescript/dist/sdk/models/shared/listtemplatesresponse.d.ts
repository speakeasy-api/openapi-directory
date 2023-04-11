import { SpeakeasyBase } from "../../../internal/utils";
import { CustomTemplate } from "./customtemplate";
/**
 * Successful response
 */
export declare class ListTemplatesResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * All GTM Custom Templates of a GTM Container.
     */
    template?: CustomTemplate[];
}
