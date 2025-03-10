<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children. */
enum UpdateNetworkWirelessSsidRequestBodySplashPageEnum: string
{
    case BILLING = 'Billing';
    case CISCO_ISE = 'Cisco ISE';
    case CLICK_THROUGH_SPLASH_PAGE = 'Click-through splash page';
    case FACEBOOK_WI_FI = 'Facebook Wi-Fi';
    case GOOGLE_APPS_DOMAIN = 'Google Apps domain';
    case GOOGLE_O_AUTH = 'Google OAuth';
    case NONE = 'None';
    case PASSWORD_PROTECTED_WITH_ACTIVE_DIRECTORY = 'Password-protected with Active Directory';
    case PASSWORD_PROTECTED_WITH_LDAP = 'Password-protected with LDAP';
    case PASSWORD_PROTECTED_WITH_MERAKI_RADIUS = 'Password-protected with Meraki RADIUS';
    case PASSWORD_PROTECTED_WITH_CUSTOM_RADIUS = 'Password-protected with custom RADIUS';
    case SMS_AUTHENTICATION = 'SMS authentication';
    case SPONSORED_GUEST = 'Sponsored guest';
    case SYSTEMS_MANAGER_SENTRY = 'Systems Manager Sentry';
}
