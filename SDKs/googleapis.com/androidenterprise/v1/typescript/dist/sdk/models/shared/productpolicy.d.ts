import { SpeakeasyBase } from "../../../internal/utils";
import { AutoInstallPolicy } from "./autoinstallpolicy";
import { EnterpriseAuthenticationAppLinkConfig } from "./enterpriseauthenticationapplinkconfig";
import { ManagedConfiguration } from "./managedconfiguration";
/**
 * The auto-update mode for the product.
 */
export declare enum ProductPolicyAutoUpdateModeEnum {
    AutoUpdateModeUnspecified = "autoUpdateModeUnspecified",
    AutoUpdateDefault = "autoUpdateDefault",
    AutoUpdatePostponed = "autoUpdatePostponed",
    AutoUpdateHighPriority = "autoUpdateHighPriority"
}
export declare enum ProductPolicyTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
/**
 * The policy for a product.
 */
export declare class ProductPolicy extends SpeakeasyBase {
    autoInstallPolicy?: AutoInstallPolicy;
    /**
     * The auto-update mode for the product.
     */
    autoUpdateMode?: ProductPolicyAutoUpdateModeEnum;
    /**
     * An authentication URL configuration for the authenticator app of an identity provider. This helps to launch the identity provider's authenticator app during the authentication happening in a private app using Android WebView. Authenticator app should already be the [default handler](https://developer.android.com/training/app-links/verify-site-associations) for the authentication url on the device.
     */
    enterpriseAuthenticationAppLinkConfigs?: EnterpriseAuthenticationAppLinkConfig[];
    /**
     * A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
     */
    managedConfiguration?: ManagedConfiguration;
    /**
     * The ID of the product. For example, "app:com.google.android.gm".
     */
    productId?: string;
    /**
     * Grants the device visibility to the specified product release track(s), identified by trackIds. The list of release tracks of a product can be obtained by calling Products.Get.
     */
    trackIds?: string[];
    /**
     * Deprecated. Use trackIds instead.
     */
    tracks?: ProductPolicyTracksEnum[];
}
