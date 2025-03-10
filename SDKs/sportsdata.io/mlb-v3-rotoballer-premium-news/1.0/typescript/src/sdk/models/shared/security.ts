/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=Ocp-Apim-Subscription-Key",
  })
  apiKeyHeader?: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=query;name=key",
  })
  apiKeyQuery?: string;
}
