/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export const UpdateSampleServerList = ["https://autopilot.twilio.com"] as const;

export class UpdateSampleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class UpdateSampleUpdateSampleRequest extends SpeakeasyBase {
  /**
   * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
   */
  @SpeakeasyMetadata({ data: "form, name=Language" })
  language?: string;

  /**
   * The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included.
   */
  @SpeakeasyMetadata({ data: "form, name=SourceChannel" })
  sourceChannel?: string;

  /**
   * The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging).
   */
  @SpeakeasyMetadata({ data: "form, name=TaggedText" })
  taggedText?: string;
}

export class UpdateSampleRequest extends SpeakeasyBase {
  /**
   * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=AssistantSid",
  })
  assistantSid: string;

  @SpeakeasyMetadata({
    data: "request, media_type=application/x-www-form-urlencoded",
  })
  requestBody?: UpdateSampleUpdateSampleRequest;

  /**
   * The Twilio-provided string that uniquely identifies the Sample resource to update.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  /**
   * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the Sample resource to update.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=TaskSid",
  })
  taskSid: string;
}

export class UpdateSampleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  autopilotV1AssistantTaskSample?: shared.AutopilotV1AssistantTaskSample;
}
