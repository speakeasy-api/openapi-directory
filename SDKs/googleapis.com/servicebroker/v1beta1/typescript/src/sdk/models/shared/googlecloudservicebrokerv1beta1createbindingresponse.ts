import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1beta1CreateBindingResponse
/** 
 * Response for the `CreateBinding()` method.
**/
export class GoogleCloudServicebrokerV1beta1CreateBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credentials?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  operation?: string;

  @SpeakeasyMetadata()
  routeServiceUrl?: string;

  @SpeakeasyMetadata()
  syslogDrainUrl?: string;

  @SpeakeasyMetadata()
  volumeMounts?: Record<string, any>[];
}
