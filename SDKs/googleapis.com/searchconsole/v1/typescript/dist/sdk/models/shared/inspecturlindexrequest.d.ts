import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Index inspection request.
 */
export declare class InspectUrlIndexRequest extends SpeakeasyBase {
    /**
     * Required. URL to inspect. Must be under the property specified in "site_url".
     */
    inspectionUrl?: string;
    /**
     * Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH". Default value is "en-US".
     */
    languageCode?: string;
    /**
     * Required. The URL of the property as defined in Search Console. **Examples:** `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain property.
     */
    siteUrl?: string;
}
