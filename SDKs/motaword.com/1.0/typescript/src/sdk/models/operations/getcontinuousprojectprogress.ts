/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetContinuousProjectProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filterByLanguage",
  })
  filterByLanguage?: string;

  /**
   * Project ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=projectId",
  })
  projectId: number;
}

export class GetContinuousProjectProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Progress information
   */
  @SpeakeasyMetadata()
  continuousProjectProgress?: shared.ContinuousProjectProgress;

  /**
   * ProjectNotFound
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
