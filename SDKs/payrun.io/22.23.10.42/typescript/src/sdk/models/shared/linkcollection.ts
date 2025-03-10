/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class LinkCollectionLinkCollectionLinkLink extends SpeakeasyBase {
  /**
   * The links' href
   */
  @SpeakeasyMetadata()
  @Expose({ name: "@href" })
  atHref?: string;

  /**
   * The links' target type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "@rel" })
  atRel?: string;

  /**
   * The links' title
   */
  @SpeakeasyMetadata()
  @Expose({ name: "@title" })
  atTitle?: string;
}

/**
 * The link collections' links
 */
export class LinkCollectionLinkCollectionLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LinkCollectionLinkCollectionLinkLink })
  @Expose({ name: "Link" })
  @Type(() => LinkCollectionLinkCollectionLinkLink)
  link?: LinkCollectionLinkCollectionLinkLink[];
}

export class LinkCollectionLinkCollection extends SpeakeasyBase {
  /**
   * The link collections' links
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Links" })
  @Type(() => LinkCollectionLinkCollectionLink)
  links?: LinkCollectionLinkCollectionLink;
}

/**
 * The link collection object.
 */
export class LinkCollection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "LinkCollection" })
  @Type(() => LinkCollectionLinkCollection)
  linkCollection?: LinkCollectionLinkCollection;
}
