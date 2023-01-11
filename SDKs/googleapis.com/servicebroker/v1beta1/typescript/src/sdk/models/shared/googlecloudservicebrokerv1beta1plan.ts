import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1beta1Plan
/** 
 * Plan message describes a Service Plan.
**/
export class GoogleCloudServicebrokerV1beta1Plan extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bindable?: boolean;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  free?: boolean;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  metadata?: Record<string, any>;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  schemas?: Record<string, any>;
}
