import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Snippet } from "./snippet";
/**
 * Represents an `UpsertSnippet` response. The response can include either `snippet` or `errors`.
 */
export declare class UpsertSnippetResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages.
     */
    snippet?: Snippet;
}
