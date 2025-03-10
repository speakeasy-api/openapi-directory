<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/** Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before. */
enum GoogleCloudRetailV2betaModelTrainingStateEnum: string
{
    case TRAINING_STATE_UNSPECIFIED = 'TRAINING_STATE_UNSPECIFIED';
    case PAUSED = 'PAUSED';
    case TRAINING = 'TRAINING';
}
