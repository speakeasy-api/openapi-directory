/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { Expose, Type } from "class-transformer";

/**
 * Identifying information for a single ancestor of a project.
 */
export class Ancestor extends SpeakeasyBase {
  /**
   * A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceId" })
  @Type(() => ResourceId)
  resourceId?: ResourceId;
}
