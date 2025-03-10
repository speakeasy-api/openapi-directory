/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Snippet } from "./snippet";
import { Expose, Type } from "class-transformer";

/**
 * Represents an `UpsertSnippet` response. The response can include either `snippet` or `errors`.
 */
export class UpsertSnippetResponse extends SpeakeasyBase {
  /**
   * Any errors that occurred during the request.
   */
  @SpeakeasyMetadata({ elemType: ErrorT })
  @Expose({ name: "errors" })
  @Type(() => ErrorT)
  errors?: ErrorT[];

  /**
   * Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "snippet" })
  @Type(() => Snippet)
  snippet?: Snippet;
}
