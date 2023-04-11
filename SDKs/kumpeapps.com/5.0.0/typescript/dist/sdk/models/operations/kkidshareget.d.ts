import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidShareGetSecurity extends SpeakeasyBase {
    authKey: string;
}
/**
 * Link to share
 */
export declare enum KkidShareGetLinkEnum {
    HttpsKhomeKumpeappsComPortalWishListPhp = "https://khome.kumpeapps.com/portal/wish-list.php",
    HttpsKhomeKumpeappsComPortalChoresTodayPhp = "https://khome.kumpeapps.com/portal/chores-today.php"
}
/**
 * Authentication scope for link
 */
export declare enum KkidShareGetScopeEnum {
    WishList = "WishList",
    WishListAdmin = "WishListAdmin",
    Chores = "Chores",
    ChoresAdmin = "ChoresAdmin"
}
/**
 * Authentication scope for link
 */
export declare enum KkidShareGetScope2Enum {
    WishList = "WishList",
    WishListAdmin = "WishListAdmin",
    Chores = "Chores",
    ChoresAdmin = "ChoresAdmin"
}
/**
 * Authentication scope for link
 */
export declare enum KkidShareGetScope3Enum {
    WishList = "WishList",
    WishListAdmin = "WishListAdmin",
    Chores = "Chores",
    ChoresAdmin = "ChoresAdmin"
}
/**
 * Authentication scope for link
 */
export declare enum KkidShareGetScope4Enum {
    WishList = "WishList",
    WishListAdmin = "WishListAdmin",
    Chores = "Chores",
    ChoresAdmin = "ChoresAdmin"
}
export declare class KkidShareGetRequest extends SpeakeasyBase {
    /**
     * Link to share
     */
    link: KkidShareGetLinkEnum;
    /**
     * User ID that the link should be authenticated to
     */
    linkUserId: string;
    /**
     * Authentication scope for link
     */
    scope: KkidShareGetScopeEnum;
    /**
     * Authentication scope for link
     */
    scope2?: KkidShareGetScope2Enum;
    /**
     * Authentication scope for link
     */
    scope3?: KkidShareGetScope3Enum;
    /**
     * Authentication scope for link
     */
    scope4?: KkidShareGetScope4Enum;
}
export declare class KkidShareGetResponse extends SpeakeasyBase {
    /**
     * authenticated link created
     */
    twoHundredAndOneShare?: shared.TwoHundredAndOneShare;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
