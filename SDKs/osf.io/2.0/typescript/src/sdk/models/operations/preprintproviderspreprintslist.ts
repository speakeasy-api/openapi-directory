/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class PreprintProvidersPreprintsListRequest extends SpeakeasyBase {
  /**
   * The unique identifier of the preprint provider.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=preprint_provider_id",
  })
  preprintProviderId: string;
}

/**
 * The properties of the preprint entity.
 */
export class PreprintProvidersPreprintsListPreprintAttributes extends SpeakeasyBase {
  /**
   * The time at which the preprint was created, as an iso8601 formatted timestamp.
   */
  @SpeakeasyMetadata()
  dateCreated?: Date;

  /**
   * The time at which the preprint was last modified, as an iso8601 formatted timestamp.
   */
  @SpeakeasyMetadata()
  dateModified?: Date;

  /**
   * The time at which the preprint was published, as an iso8601 formatted timestamp.
   */
  @SpeakeasyMetadata()
  datePublished?: Date;

  /**
   * The DOI of the associated journal article, as entered by the user, if the preprint is published.
   */
  @SpeakeasyMetadata()
  doi?: string;

  /**
   * Whether or not the preprint is orphaned. A preprint can be orphaned if it's primary file was removed from the preprint node. This field may be deprecated in future versions.
   */
  @SpeakeasyMetadata()
  isPreprintOrphan?: boolean;

  /**
   * The metadata (copyright year and holder) associated with a license, required for certain licenses.
   */
  @SpeakeasyMetadata()
  licenseRecord?: string;

  /**
   * A nested array structure that describe subjects related to the preprint, in the BePress taxonomy. Each dictionary contains the text and ID of a subject.
   */
  @SpeakeasyMetadata()
  subjects?: string[];
}

/**
 * URLs to alternative representations of the preprint entity.
 */
export class PreprintProvidersPreprintsListPreprintLinks extends SpeakeasyBase {
  /**
   * The URL representation of the DOI entered by the user for the preprint manuscript.
   */
  @SpeakeasyMetadata()
  doi?: string;

  /**
   * A link to the project on the OSF that was created for the preprint, or from which the preprint was created.
   */
  @SpeakeasyMetadata()
  html?: string;

  /**
   * The URL representation of the OSF assigned DOI for the preprint.
   */
  @SpeakeasyMetadata()
  preprintDoi?: string;

  /**
   * A link to the detail page for the preprint.
   */
  @SpeakeasyMetadata()
  self?: string;
}

/**
 * URLs to other entities or entity collections that have a relationship to the preprint entity.
 */
export class PreprintProvidersPreprintsListPreprintRelationships extends SpeakeasyBase {
  /**
   * A relationship to the bibliographic contributors that are listed as contributing to this preprint.
   */
  @SpeakeasyMetadata()
  bibliographicContributors?: string;

  /**
   * A relationship to the citation of the preprint.
   */
  @SpeakeasyMetadata()
  citation?: string;

  /**
   * A relationship to the identifiers associated with the preprint.
   */
  @SpeakeasyMetadata()
  identifiers?: string;

  /**
   * A relationship to the license that has been applied to the preprint.
   */
  @SpeakeasyMetadata()
  license?: string;

  /**
   * A relationship to the node that was created for the preprint, or from which the preprint was created.
   */
  @SpeakeasyMetadata()
  node: string;

  /**
   * A relationship to the file that is designated as the preprint's primary file, or the manuscript of the preprint.
   */
  @SpeakeasyMetadata()
  primaryFile: string;

  /**
   * A relationship to the preprint provider under which the preprint was created (OSF, socarxiv, psyarxiv, etc.).
   */
  @SpeakeasyMetadata()
  provider: string;
}

export class PreprintProvidersPreprintsListPreprint extends SpeakeasyBase {
  /**
   * The properties of the preprint entity.
   */
  @SpeakeasyMetadata()
  attributes?: PreprintProvidersPreprintsListPreprintAttributes;

  /**
   * The identifier of the preprint entity.
   */
  @SpeakeasyMetadata()
  id?: string;

  /**
   * URLs to alternative representations of the preprint entity.
   */
  @SpeakeasyMetadata()
  links?: PreprintProvidersPreprintsListPreprintLinks;

  /**
   * URLs to other entities or entity collections that have a relationship to the preprint entity.
   */
  @SpeakeasyMetadata()
  relationships: PreprintProvidersPreprintsListPreprintRelationships;

  /**
   * The type identifier of the preprint entity (`preprints`).
   */
  @SpeakeasyMetadata()
  type: string;
}

export class PreprintProvidersPreprintsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
