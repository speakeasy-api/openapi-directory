import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html
 */
export declare class UsesFeature extends SpeakeasyBase {
    /**
     * The android:required value
     */
    isRequired?: boolean;
    /**
     * The android:name value
     */
    name?: string;
}
