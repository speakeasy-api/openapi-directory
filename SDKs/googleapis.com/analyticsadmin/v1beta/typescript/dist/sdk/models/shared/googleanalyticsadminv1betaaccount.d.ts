import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource message representing a Google Analytics account.
**/
export declare class GoogleAnalyticsAdminV1betaAccount extends SpeakeasyBase {
    createTime?: string;
    deleted?: boolean;
    displayName?: string;
    name?: string;
    regionCode?: string;
    updateTime?: string;
}
/**
 * A resource message representing a Google Analytics account.
**/
export declare class GoogleAnalyticsAdminV1betaAccountInput extends SpeakeasyBase {
    displayName?: string;
    regionCode?: string;
}
