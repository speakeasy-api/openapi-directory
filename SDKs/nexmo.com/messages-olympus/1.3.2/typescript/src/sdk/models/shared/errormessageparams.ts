import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorMessageParamsInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


// ErrorMessageParams
/** 
 * Invalid message parameters
**/
export class ErrorMessageParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: ErrorMessageParamsInvalidParameters })
  invalidParameters?: ErrorMessageParamsInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
