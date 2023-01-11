import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignalEvaluateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class SignalEvaluateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Record<string, any>;

  @SpeakeasyMetadata()
  signalEvaluateResponse?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
