/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export const FetchConferenceRecordingServerList = [
  "https://api.twilio.com",
] as const;

export class FetchConferenceRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class FetchConferenceRecordingRequest extends SpeakeasyBase {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference Recording resource to fetch.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=AccountSid",
  })
  accountSid: string;

  /**
   * The Conference SID that identifies the conference associated with the recording to fetch.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ConferenceSid",
  })
  conferenceSid: string;

  /**
   * The Twilio-provided string that uniquely identifies the Conference Recording resource to fetch.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export class FetchConferenceRecordingResponse extends SpeakeasyBase {
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
  apiV2010AccountConferenceConferenceRecording?: shared.ApiV2010AccountConferenceConferenceRecording;
}
