/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchResponseFacetFacetValue } from "./googlecloudretailv2betasearchresponsefacetfacetvalue";
import { Expose, Type } from "class-transformer";

/**
 * A facet result.
 */
export class GoogleCloudRetailV2betaSearchResponseFacet extends SpeakeasyBase {
  /**
   * Whether the facet is dynamically generated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dynamicFacet" })
  dynamicFacet?: boolean;

  /**
   * The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  /**
   * The facet values for this field.
   */
  @SpeakeasyMetadata({
    elemType: GoogleCloudRetailV2betaSearchResponseFacetFacetValue,
  })
  @Expose({ name: "values" })
  @Type(() => GoogleCloudRetailV2betaSearchResponseFacetFacetValue)
  values?: GoogleCloudRetailV2betaSearchResponseFacetFacetValue[];
}
