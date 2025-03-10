/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaConversionEvent } from "./googleanalyticsadminv1alphaconversionevent";
import { Expose, Type } from "class-transformer";

/**
 * Response message for ListConversionEvents RPC.
 */
export class GoogleAnalyticsAdminV1alphaListConversionEventsResponse extends SpeakeasyBase {
  /**
   * The requested conversion events
   */
  @SpeakeasyMetadata({ elemType: GoogleAnalyticsAdminV1alphaConversionEvent })
  @Expose({ name: "conversionEvents" })
  @Type(() => GoogleAnalyticsAdminV1alphaConversionEvent)
  conversionEvents?: GoogleAnalyticsAdminV1alphaConversionEvent[];

  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;
}
