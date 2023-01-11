import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorChannelParamsInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


// ErrorChannelParams
/** 
 * Invalid channel parameters
**/
export class ErrorChannelParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: ErrorChannelParamsInvalidParameters })
  invalidParameters?: ErrorChannelParamsInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
