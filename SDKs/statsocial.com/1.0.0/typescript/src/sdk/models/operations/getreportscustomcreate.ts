/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetReportsCustomCreateRequest extends SpeakeasyBase {
  /**
   * Filtering options to be used when creating a filtered report. The options must be in JSON form, example: {'gender':['male'],'ages':['18-24'],'countries':['usa']}
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filter",
  })
  filter?: string;

  /**
   * Upload hash to be used for inserting handles
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=upload_hash",
  })
  uploadHash: string;
}

export class GetReportsCustomCreateResponse extends SpeakeasyBase {
  /**
   * Possible reasons include:<br>{success: 0, msg: Invalid API parameters, error_code_msg: API_INVALID_PARAMS}<br>{success: 0, msg: Error please include the 'action' parameter, error_code_msg: API_MISSING_ACTION_PARAMETER}
   */
  @SpeakeasyMetadata()
  fourHundredError?: shared.FourHundredError;

  /**
   * {success: 0, msg: Invalid API key, error_code_msg: API_INVALID_KEY}
   */
  @SpeakeasyMetadata()
  fourHundredAndOneError?: shared.FourHundredAndOneError;

  /**
   * {success: 0, msg: you are going too fast}
   */
  @SpeakeasyMetadata()
  fourHundredAndThreeError?: shared.FourHundredAndThreeError;

  /**
   * {success: 0, msg: The upload hash provided does not exist, error_code_msg: UPLOAD_HASH_DOES_NOT_EXIST}
   */
  @SpeakeasyMetadata()
  fourHundredAndFourError?: shared.FourHundredAndFourError;

  /**
   * Possible reasons include:<br>{success: 0, msg: Error getting application's credentials, error_code_msg: API_ERROR_GETTING_APPLICATION_INFO}<br>{success: 0, msg: Internal database error, error_code_msg: API_ERROR_DATABASE_INITIATION_ERROR}<br>{success: 0, msg: Report has no data, error_code_msg: API_ERROR_EMPTY_REPORT}
   */
  @SpeakeasyMetadata()
  fiveHundredError?: shared.FiveHundredError;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  customCreate?: shared.CustomCreate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
