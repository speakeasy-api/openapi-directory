/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentStyle } from "./documentstyle";
import { DocumentStyleSuggestionState } from "./documentstylesuggestionstate";
import { Expose, Type } from "class-transformer";

/**
 * A suggested change to the DocumentStyle.
 */
export class SuggestedDocumentStyle extends SpeakeasyBase {
  /**
   * The style of the document.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "documentStyle" })
  @Type(() => DocumentStyle)
  documentStyle?: DocumentStyle;

  /**
   * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "documentStyleSuggestionState" })
  @Type(() => DocumentStyleSuggestionState)
  documentStyleSuggestionState?: DocumentStyleSuggestionState;
}
