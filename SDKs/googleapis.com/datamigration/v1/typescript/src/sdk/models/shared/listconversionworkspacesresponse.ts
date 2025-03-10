/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConversionWorkspace } from "./conversionworkspace";
import { Expose, Type } from "class-transformer";

/**
 * Response message for 'ListConversionWorkspaces' request.
 */
export class ListConversionWorkspacesResponse extends SpeakeasyBase {
  /**
   * The list of conversion workspace objects.
   */
  @SpeakeasyMetadata({ elemType: ConversionWorkspace })
  @Expose({ name: "conversionWorkspaces" })
  @Type(() => ConversionWorkspace)
  conversionWorkspaces?: ConversionWorkspace[];

  /**
   * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;

  /**
   * Locations that could not be reached.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unreachable" })
  unreachable?: string[];
}
