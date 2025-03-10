/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ActionsListEnvironmentSecretsRequest extends SpeakeasyBase {
  /**
   * The name of the environment.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=environment_name",
  })
  environmentName: string;

  /**
   * Page number of the results to fetch.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * The number of results per page (max 100).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;

  /**
   * The unique identifier of the repository.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repository_id",
  })
  repositoryId: number;
}

/**
 * Response
 */
export class ActionsListEnvironmentSecrets200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ActionsSecret })
  @Expose({ name: "secrets" })
  @Type(() => shared.ActionsSecret)
  secrets: shared.ActionsSecret[];

  @SpeakeasyMetadata()
  @Expose({ name: "total_count" })
  totalCount: number;
}

export class ActionsListEnvironmentSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  actionsListEnvironmentSecrets200ApplicationJSONObject?: ActionsListEnvironmentSecrets200ApplicationJSON;
}
