/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ProjectsMoveCardRequestBody extends SpeakeasyBase {
  /**
   * The unique identifier of the column the card should be moved to
   */
  @SpeakeasyMetadata()
  @Expose({ name: "column_id" })
  columnId?: number;

  /**
   * The position of the card in a column. Can be one of: `top`, `bottom`, or `after:<card_id>` to place after the specified card.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "position" })
  position: string;
}

export class ProjectsMoveCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: ProjectsMoveCardRequestBody;

  /**
   * The unique identifier of the card.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=card_id",
  })
  cardId: number;
}

export class ProjectsMoveCard503ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * Response
 */
export class ProjectsMoveCard503ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ elemType: ProjectsMoveCard503ApplicationJSONErrors })
  @Expose({ name: "errors" })
  @Type(() => ProjectsMoveCard503ApplicationJSONErrors)
  errors?: ProjectsMoveCard503ApplicationJSONErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class ProjectsMoveCard403ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  resource?: string;
}

/**
 * Forbidden
 */
export class ProjectsMoveCard403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ elemType: ProjectsMoveCard403ApplicationJSONErrors })
  @Expose({ name: "errors" })
  @Type(() => ProjectsMoveCard403ApplicationJSONErrors)
  errors?: ProjectsMoveCard403ApplicationJSONErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class ProjectsMoveCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Requires authentication
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  projectsMoveCard201ApplicationJSONObject?: Record<string, any>;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  projectsMoveCard403ApplicationJSONObject?: ProjectsMoveCard403ApplicationJSON;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  projectsMoveCard503ApplicationJSONObject?: ProjectsMoveCard503ApplicationJSON;

  /**
   * Validation failed
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
