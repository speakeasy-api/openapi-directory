import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTokenSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * For <i>type=ACTION</i> only; defines token action to be perfromed
 */
export declare enum CreateTokenRequestBodyActionEnum {
    LicenseeLogin = "licenseeLogin"
}
/**
 * For <i>tokenType=APIKEY</i> only (default: ROLE_APIKEY_LICENSEE); defines token RoleID
 */
export declare enum CreateTokenRequestBodyApiKeyRoleEnum {
    RoleApikeyLicensee = "ROLE_APIKEY_LICENSEE",
    RoleApikeyAnalytics = "ROLE_APIKEY_ANALYTICS",
    RoleApikeyOperation = "ROLE_APIKEY_OPERATION",
    RoleApikeyMaintenance = "ROLE_APIKEY_MAINTENANCE",
    RoleApikeyAdmin = "ROLE_APIKEY_ADMIN"
}
/**
 * Token type to be generated
 */
export declare enum CreateTokenRequestBodyTokenTypeEnum {
    Default = "DEFAULT",
    Shop = "SHOP",
    Apikey = "APIKEY"
}
/**
 * For <i>tokenType=DEFAULT</i> only; action type to be set
 */
export declare enum CreateTokenRequestBodyTypeEnum {
    Action = "ACTION"
}
export declare class CreateTokenRequestBody extends SpeakeasyBase {
    /**
     * For <i>type=ACTION</i> only; defines token action to be perfromed
     */
    action?: CreateTokenRequestBodyActionEnum;
    /**
     * For <i>tokenType=APIKEY</i> only (default: ROLE_APIKEY_LICENSEE); defines token RoleID
     */
    apiKeyRole?: CreateTokenRequestBodyApiKeyRoleEnum;
    /**
     * For <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout
     */
    cancelURL?: string;
    /**
     * For <i>tokenType=SHOP</i> only; shop link title for cancel checkout process
     */
    cancelURLTitle?: string;
    /**
     * For <i>tokenType=SHOP</i> only; identifies LicenseTemplate that will be assigned to the shop token
     */
    licenseTemplateNumber?: string;
    /**
     * For <i>tokenType=SHOP</i> or <i>type=ACTION</i> only (mandatory); identifies Licensee that will be assigned to the shop token
     */
    licenseeNumber?: string;
    /**
     * For <i>tokenType=SHOP</i> only; identifies Shopping Item name that will be shown to the customer
     */
    predefinedShoppingItem?: string;
    /**
     * For <i>tokenType=APIKEY</i> only (optional); defines PrivateKey to be used with the validate method<br/><strong>Please Note:</strong> PrivateKey need to be provided as one line without spaces
     */
    privateKey?: string;
    /**
     * For <i>tokenType=SHOP</i> only (mandatory); identifies Product that will be assigned to the shop token
     */
    productNumber?: string;
    /**
     * For <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout
     */
    successURL?: string;
    /**
     * For <i>tokenType=SHOP</i> only; shop link title for successful checkout process
     */
    successURLTitle?: string;
    /**
     * Token type to be generated
     */
    tokenType: CreateTokenRequestBodyTokenTypeEnum;
    /**
     * For <i>tokenType=DEFAULT</i> only; action type to be set
     */
    type?: CreateTokenRequestBodyTypeEnum;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
