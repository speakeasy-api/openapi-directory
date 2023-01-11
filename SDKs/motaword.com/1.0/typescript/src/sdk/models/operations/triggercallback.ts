import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TriggerCallbackActionTypeEnum {
    Translated = "translated",
    Proofread = "proofread",
    Completed = "completed"
}


export class TriggerCallbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionType" })
  actionType: TriggerCallbackActionTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class TriggerCallbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TriggerCallbackPathParams;
}


export class TriggerCallbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callbackResult?: shared.CallbackResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
