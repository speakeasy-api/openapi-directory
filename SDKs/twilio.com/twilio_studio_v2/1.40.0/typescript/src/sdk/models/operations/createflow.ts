/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export const CreateFlowServerList = ["https://studio.twilio.com"] as const;

export class CreateFlowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class CreateFlowCreateFlowRequest extends SpeakeasyBase {
  /**
   * Description of change made in the revision.
   */
  @SpeakeasyMetadata({ data: "form, name=CommitMessage" })
  commitMessage?: string;

  /**
   * JSON representation of flow definition.
   */
  @SpeakeasyMetadata({ data: "form, name=Definition" })
  definition: any;

  /**
   * The string that you assigned to describe the Flow.
   */
  @SpeakeasyMetadata({ data: "form, name=FriendlyName" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=Status" })
  status: shared.FlowEnumStatusEnum;
}

export class CreateFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Created
   */
  @SpeakeasyMetadata()
  studioV2Flow?: shared.StudioV2Flow;
}
