import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The section of an tag. https://developer.android.com/guide/topics/manifest/intent-filter-element.html
 */
export declare class IntentFilter extends SpeakeasyBase {
    /**
     * The android:name value of the tag.
     */
    actionNames?: string[];
    /**
     * The android:name value of the tag.
     */
    categoryNames?: string[];
    /**
     * The android:mimeType value of the tag.
     */
    mimeType?: string;
}
