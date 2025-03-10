<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum PlanDataServiceThatProvisionedThePlanEnum: string
{
    case SALESFORCE = 'SALESFORCE';
    case HEROKU = 'HEROKU';
    case SF_AUTO_PROVISION = 'SF_AUTO_PROVISION';
    case SF_AUTO_PROVISION_BOUND = 'SF_AUTO_PROVISION_BOUND';
}
