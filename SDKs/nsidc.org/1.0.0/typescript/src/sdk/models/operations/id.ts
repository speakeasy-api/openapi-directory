/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
 */
export enum IdSourceEnum {
  Nsidc = "NSIDC",
  Ade = "ADE",
}

export class IdRequest extends SpeakeasyBase {
  /**
   * Search terms typed into the interface (minimum two characters)
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  /**
   * Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=source",
  })
  source: IdSourceEnum;
}

export class IdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  id200ApplicationXSuggestionsPlusJsonString?: string;
}
