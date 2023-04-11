import { SpeakeasyBase } from "../../../internal/utils";
import { Snippet } from "./snippet";
/**
 * Represents an `UpsertSnippet` request.
 */
export declare class UpsertSnippetRequest extends SpeakeasyBase {
    /**
     * Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages.
     */
    snippet: Snippet;
}
