<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate. If omitted defaults to `uploaded`. */
enum PostCertificatesCreateCertificateRequestTypeEnum: string
{
    case UPLOADED = 'uploaded';
    case MANAGED = 'managed';
}
