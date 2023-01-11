import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderParametersServiceOfferingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provider_control_parameters" })
  providerControlParameters?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=service_parameters" })
  serviceParameters?: Record<string, any>;
}
