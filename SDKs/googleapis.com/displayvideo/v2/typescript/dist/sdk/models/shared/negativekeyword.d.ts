import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A negatively targeted keyword that belongs to a negative keyword list.
 */
export declare class NegativeKeywordInput extends SpeakeasyBase {
    /**
     * Required. Immutable. The negatively targeted keyword, for example `car insurance`. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. Valid characters are restricted to ASCII characters only. The only URL-escaping permitted is for representing whitespace between words. Leading or trailing whitespace is ignored.
     */
    keywordValue?: string;
}
/**
 * A negatively targeted keyword that belongs to a negative keyword list.
 */
export declare class NegativeKeyword extends SpeakeasyBase {
    /**
     * Required. Immutable. The negatively targeted keyword, for example `car insurance`. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. Valid characters are restricted to ASCII characters only. The only URL-escaping permitted is for representing whitespace between words. Leading or trailing whitespace is ignored.
     */
    keywordValue?: string;
    /**
     * Output only. The resource name of the negative keyword.
     */
    name?: string;
}
