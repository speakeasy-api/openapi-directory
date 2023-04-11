import { SpeakeasyBase } from "../../../internal/utils";
import { ApiSpec } from "./apispec";
/**
 * Response message for ListApiSpecRevisionsResponse.
 */
export declare class ListApiSpecRevisionsResponse extends SpeakeasyBase {
    /**
     * The revisions of the spec.
     */
    apiSpecs?: ApiSpec[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
