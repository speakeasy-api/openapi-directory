/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApiOperation } from "./apioperation";
import { Expose, Type } from "class-transformer";

/**
 * Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter.
 */
export class EgressTo extends SpeakeasyBase {
  /**
   * A list of external resources that are allowed to be accessed. Only AWS and Azure resources are supported. For Amazon S3, the supported format is s3://BUCKET_NAME. For Azure Storage, the supported format is azure://myaccount.blob.core.windows.net/CONTAINER_NAME. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "externalResources" })
  externalResources?: string[];

  /**
   * A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list.
   */
  @SpeakeasyMetadata({ elemType: ApiOperation })
  @Expose({ name: "operations" })
  @Type(() => ApiOperation)
  operations?: ApiOperation[];

  /**
   * A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resources" })
  resources?: string[];
}
