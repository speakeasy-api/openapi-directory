/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Specifications to match a query parameter in the request.
 */
export class HttpRouteQueryParameterMatch extends SpeakeasyBase {
  /**
   * The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exactMatch" })
  exactMatch?: string;

  /**
   * Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "presentMatch" })
  presentMatch?: boolean;

  /**
   * The name of the query parameter to match.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "queryParameter" })
  queryParameter?: string;

  /**
   * The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "regexMatch" })
  regexMatch?: string;
}
