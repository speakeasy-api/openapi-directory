import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SAML IDP (identity provider) configuration.
 */
export declare class SamlIdpConfig extends SpeakeasyBase {
    /**
     * The **Change Password URL** of the identity provider. Users will be sent to this URL when changing their passwords at `myaccount.google.com`. This takes precedence over the change password URL configured at customer-level. Must use `HTTPS`.
     */
    changePasswordUri?: string;
    /**
     * Required. The SAML **Entity ID** of the identity provider.
     */
    entityId?: string;
    /**
     * The **Logout Redirect URL** (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML `LogoutRequest` i.e. SAML single logout is not supported. Must use `HTTPS`.
     */
    logoutRedirectUri?: string;
    /**
     * Required. The `SingleSignOnService` endpoint location (sign-in page URL) of the identity provider. This is the URL where the `AuthnRequest` will be sent. Must use `HTTPS`. Assumed to accept the `HTTP-Redirect` binding.
     */
    singleSignOnServiceUri?: string;
}
