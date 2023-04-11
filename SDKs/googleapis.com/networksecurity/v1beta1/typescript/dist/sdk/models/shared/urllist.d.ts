import { SpeakeasyBase } from "../../../internal/utils";
/**
 * UrlList proto helps users to set reusable, independently manageable lists of hosts, host patterns, URLs, URL patterns.
 */
export declare class UrlListInput extends SpeakeasyBase {
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
    /**
     * Required. FQDNs and URLs.
     */
    values?: string[];
}
/**
 * UrlList proto helps users to set reusable, independently manageable lists of hosts, host patterns, URLs, URL patterns.
 */
export declare class UrlList extends SpeakeasyBase {
    /**
     * Output only. Time when the security policy was created.
     */
    createTime?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
    /**
     * Output only. Time when the security policy was updated.
     */
    updateTime?: string;
    /**
     * Required. FQDNs and URLs.
     */
    values?: string[];
}
