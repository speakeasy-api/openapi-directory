/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class PreprintProviderLicensesListRequest extends SpeakeasyBase {
  /**
   * The unique identifier of the preprint provider.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=preprint_provider_id",
  })
  preprintProviderId: string;
}

/**
 * The properties of the license.
 */
export class PreprintProviderLicensesListLicenseAttributes extends SpeakeasyBase {
  /**
   * Name of the license.
   */
  @SpeakeasyMetadata()
  name?: string;

  /**
   * Fields required for this license (provided to help front-end validators). Maps to properties on the NodeLicense model.
   */
  @SpeakeasyMetadata()
  requiredFields?: string[];

  /**
   * Full text of the license.
   */
  @SpeakeasyMetadata()
  text?: string;
}

/**
 * URLs to alternative representations of the license.
 */
export class PreprintProviderLicensesListLicenseLinks extends SpeakeasyBase {
  /**
   * A link to the detail page for the license.
   */
  @SpeakeasyMetadata()
  self?: string;
}

/**
 * OK
 */
export class PreprintProviderLicensesListLicense extends SpeakeasyBase {
  /**
   * The properties of the license.
   */
  @SpeakeasyMetadata()
  attributes?: PreprintProviderLicensesListLicenseAttributes;

  /**
   * The identifier of the license.
   */
  @SpeakeasyMetadata()
  id?: string;

  /**
   * URLs to alternative representations of the license.
   */
  @SpeakeasyMetadata()
  links?: PreprintProviderLicensesListLicenseLinks;

  /**
   * The type identifier of the license (`license`).
   */
  @SpeakeasyMetadata()
  type?: string;
}

export class PreprintProviderLicensesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
