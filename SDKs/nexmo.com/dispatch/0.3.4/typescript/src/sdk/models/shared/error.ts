import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


// ErrorT
/** 
 * The error format is standardized to the 4xx/5xx range with a code and a human readable explanation.
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters" })
  invalidParameters?: ErrorInvalidParameters;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
