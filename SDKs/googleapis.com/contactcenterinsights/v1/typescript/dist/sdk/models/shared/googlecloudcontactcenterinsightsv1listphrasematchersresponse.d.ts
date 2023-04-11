import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1PhraseMatcher } from "./googlecloudcontactcenterinsightsv1phrasematcher";
/**
 * The response of listing phrase matchers.
 */
export declare class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The phrase matchers that match the request.
     */
    phraseMatchers?: GoogleCloudContactcenterinsightsV1PhraseMatcher[];
}
