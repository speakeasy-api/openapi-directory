/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
  /**
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  /**
   * The unique identifier of the repository.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repository_id",
  })
  repositoryId: number;
}

export class ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
