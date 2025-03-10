/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A quota override
 */
export class V1Beta1QuotaOverride extends SpeakeasyBase {
  /**
   * The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adminOverrideAncestor" })
  adminOverrideAncestor?: string;

  /**
   *  If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dimensions" })
  dimensions?: Record<string, string>;

  /**
   * The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metric" })
  metric?: string;

  /**
   * The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "overrideValue" })
  overrideValue?: string;

  /**
   * The limit unit of the limit to which this override applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unit" })
  unit?: string;
}
