import { SpeakeasyBase } from "../../../internal/utils";
import { Glossary } from "./glossary";
/**
 * Response message for ListGlossaries.
 */
export declare class ListGlossariesResponse extends SpeakeasyBase {
    /**
     * The list of glossaries for a project.
     */
    glossaries?: Glossary[];
    /**
     * A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to `ListGlossaries` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
