/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ArticleSearchDTO } from "./articlesearchdto";
import { Expose, Type } from "class-transformer";

/**
 * The DefaultResponseDTO Class.
 *
 * @remarks
 * Contains fields of DefaultResponse DTO in application.
 *
 */
export class DefaultResponseDTOOfListOfArticleSearchDTO extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isError" })
  isError?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "responseException" })
  responseException?: any;

  @SpeakeasyMetadata({ elemType: ArticleSearchDTO })
  @Expose({ name: "result" })
  @Type(() => ArticleSearchDTO)
  result?: ArticleSearchDTO[];
}
