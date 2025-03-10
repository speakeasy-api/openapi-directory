/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Required. The WAF feature for which this key is enabled.
 */
export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum {
  WafFeatureUnspecified = "WAF_FEATURE_UNSPECIFIED",
  ChallengePage = "CHALLENGE_PAGE",
  SessionToken = "SESSION_TOKEN",
  ActionToken = "ACTION_TOKEN",
  Express = "EXPRESS",
}

/**
 * Required. The WAF service that uses this key.
 */
export enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum {
  WafServiceUnspecified = "WAF_SERVICE_UNSPECIFIED",
  Ca = "CA",
  Fastly = "FASTLY",
}

/**
 * Settings specific to keys that can be used for WAF (Web Application Firewall).
 */
export class GoogleCloudRecaptchaenterpriseV1WafSettings extends SpeakeasyBase {
  /**
   * Required. The WAF feature for which this key is enabled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "wafFeature" })
  wafFeature?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;

  /**
   * Required. The WAF service that uses this key.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "wafService" })
  wafService?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
}
