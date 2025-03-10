/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ReposTransferRequestBody extends SpeakeasyBase {
  /**
   * The username or organization name the repository will be transferred to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "new_owner" })
  newOwner: string;

  /**
   * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "team_ids" })
  teamIds?: number[];
}

export class ReposTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: ReposTransferRequestBody;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class ReposTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  minimalRepository?: shared.MinimalRepository;
}
