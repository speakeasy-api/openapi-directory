<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Message codes defined for PIS for HTTP Error code 401 (UNAUTHORIZED). */
enum MessageCode401PISEnum: string
{
    case CERTIFICATE_INVALID = 'CERTIFICATE_INVALID';
    case ROLE_INVALID = 'ROLE_INVALID';
    case CERTIFICATE_EXPIRED = 'CERTIFICATE_EXPIRED';
    case CERTIFICATE_BLOCKED = 'CERTIFICATE_BLOCKED';
    case CERTIFICATE_REVOKE = 'CERTIFICATE_REVOKE';
    case CERTIFICATE_MISSING = 'CERTIFICATE_MISSING';
    case SIGNATURE_INVALID = 'SIGNATURE_INVALID';
    case SIGNATURE_MISSING = 'SIGNATURE_MISSING';
    case CORPORATE_ID_INVALID = 'CORPORATE_ID_INVALID';
    case PSU_CREDENTIALS_INVALID = 'PSU_CREDENTIALS_INVALID';
    case CONSENT_INVALID = 'CONSENT_INVALID';
    case CONSENT_EXPIRED = 'CONSENT_EXPIRED';
    case TOKEN_UNKNOWN = 'TOKEN_UNKNOWN';
    case TOKEN_INVALID = 'TOKEN_INVALID';
    case TOKEN_EXPIRED = 'TOKEN_EXPIRED';
    case REQUIRED_KID_MISSING = 'REQUIRED_KID_MISSING';
}
