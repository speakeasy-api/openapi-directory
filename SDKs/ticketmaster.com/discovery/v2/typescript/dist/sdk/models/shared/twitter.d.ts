import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Twitter handle
 */
export declare enum TwitterHandleEnum {
    AtATwitterHandle = "@a Twitter handle"
}
/**
 * Twitter data
 */
export declare class Twitter extends SpeakeasyBase {
    /**
     * Twitter handle
     */
    handle?: TwitterHandleEnum;
    /**
     * Twitter hashtags
     */
    hashtags?: string[];
}
