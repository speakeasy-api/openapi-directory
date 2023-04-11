import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1betaAvailableLocale } from "./googlesearchideahubv1betaavailablelocale";
/**
 * Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.
 */
export declare class GoogleSearchIdeahubV1betaListAvailableLocalesResponse extends SpeakeasyBase {
    /**
     * Locales for which ideas are available for the given Creator.
     */
    availableLocales?: GoogleSearchIdeahubV1betaAvailableLocale[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
